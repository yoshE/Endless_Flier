#pragma strict

// Use this for initialization
function Start () {
	Screen.autorotateToPortrait = true;
	Screen.autorotateToPortraitUpsideDown = true;
	Screen.orientation = ScreenOrientation.AutoRotation;
}

// Update is called once per frame
function Update () {
	for(var i : int = 0; i < Input.touchCount; i++)
	{
		var touchy : Touch = Input.GetTouch(i);
		
		if (touchy.phase == TouchPhase.Ended && touchy.tapCount == 1) {
				transform.Translate(1,0,0);
			}
	}
}

