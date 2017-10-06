var IPlayer;
var IStaticObjects = [];

function WorldInit() {
    IPlayer = new IEntity("none", EVector(50,50), ERotation(0), EVector(50,50), "red");
    IPlayer.entityGravity = EVector(0, 0.05);
    IWorldCanvas.Init();
}

var IWorldCanvas = {
    CanvasPanel : document.createElement("canvas"),
    Init : function() {
        this.CanvasPanel.width = 1280;
        this.CanvasPanel.height = 720;
        this.context = this.CanvasPanel.getContext("2d");
        document.body.insertBefore(this.CanvasPanel, document.body.childNodes[0]);
        this.frameTime = 0;
        this.TickInterval = setInterval(WorldTick, 10);
    },
    Clear : function() {
        this.context.clearRect(0, 0, this.CanvasPanel.width, this.CanvasPanel.height);
    }
}

function WorldTick() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < IStaticObjects.length; i += 1) {
        if (IPlayer.CollisionCheck(IStaticObjects[i])) {
            return;
        }
    }
    IWorldCanvas.Clear();
    IWorldCanvas.frameTime += 1;
    if (IWorldCanvas.frameTime == 1 || CalcInterval(150)) {
        x = IWorldCanvas.CanvasPanel.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

        IStaticObjects.push(new IEntity("none", EVector(x,50), ERotation(0), EVector(50,height), "red"));
        IStaticObjects.push(new IEntity("none", EVector(x,height + gap), ERotation(0), EVector(50,x - height - gap), "red"));
    }
    for (i = 0; i < IStaticObjects.length; i += 1) {
        IStaticObjects[i].entityLocation.x += -1;
        IStaticObjects[i].Tick();
    }
    IPlayer.UpdatePosition();
    IPlayer.Tick();
}

function CalcInterval(targetInterval) {
    if ((IWorldCanvas.frameTime / targetInterval) % 1 == 0) {return true;}
    return false;
}

function EVector(x, y){
  return {x: x, y: y};
}

function ERotation(x){
  return x;
}

function IEntity(entityType, entityLocation, entityRotation, entitySize, entityColor) {
    this.entityType = entityType;
    this.entityColor = entityColor;
    this.entityLocation = entityLocation;
    this.entityRotation = entityRotation;
    this.entitySize = entitySize;
    this.entityAcceleration = EVector(0, 0);
    this.entityGravity = EVector(0, 0);
    this.entityGravityInterpolation = EVector(0, 0);
    this.Tick = function() {
        canvas_context = IWorldCanvas.context;
        if (this.entityType == "text") {
            canvas_context.font = this.entitySize.x + " " + this.entitySize.y;
            canvas_context.fillStyle = entityColor;
            canvas_context.fillText(this.text, this.entityLocation.x, this.entityLocation.y);
        } else {
            canvas_context.fillStyle = entityColor;
            canvas_context.fillRect(this.entityLocation.x, this.entityLocation.y, this.entitySize.x, this.entitySize.y);
        }
    }
    this.UpdatePosition = function() {
        this.entityGravityInterpolation.x += this.entityGravity.x;
        this.entityGravityInterpolation.y += this.entityGravity.y;
        this.entityLocation.x += this.entityAcceleration.x + this.entityGravityInterpolation.x;
        this.entityLocation.y += this.entityAcceleration.y + this.entityGravityInterpolation.y;
        this.HitScreenBottom();
    }
    this.Accelerate = function(n)  {
        this.entityGravity = n;
    }
    this.HitScreenBottom = function() {
        var screenBottom = IWorldCanvas.CanvasPanel.height - this.entitySize.y;
        if (this.entityLocation.y > screenBottom) {
            this.entityLocation.y = screenBottom;
            this.entityGravityInterpolation = EVector(0, 0);
        }
    }
    this.CollisionCheck = function(otherobj) {
        var myleft = this.entityLocation.x;
        var myright = this.entityLocation.x + (this.entitySize.x);
        var mytop = this.entityLocation.y;
        var mybottom = this.entityLocation.y + (this.entitySize.y);
        var otherleft = otherobj.entityLocation.x;
        var otherright = otherobj.entityLocation.x + (otherobj.entitySize.x);
        var othertop = otherobj.entityLocation.y;
        var otherbottom = otherobj.entityLocation.y + (otherobj.entitySize.y);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

//function FPlayer(playerName, playerLocation, playerRotation, playerSize){
//  IEntity.call(entityType, entityLocation, entityRotation, entitySize);
//}
