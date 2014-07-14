using UnityEngine;
using System.Collections;

public class player_cs : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		// Look for all fingers
		for (int i = 0; i < Input.touchCount; i++) {
			Touch touch = Input.GetTouch(i);

			if (touch.phase == TouchPhase.Ended && touch.tapCount == 1) {
				transform.Translate(1,0,0);
			}
		}
	}
}
