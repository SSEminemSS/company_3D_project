//ghy++  2019.04.11 三维初始化
  var globemap = Cesium.createTileMapServiceImageryProvider({
            url: 'lib/Build/Cesium/Assets/Textures/NaturalEarthII'
        });
var viewer = new Cesium.Viewer('cesiumContainer',{
	 scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
	animation:false,
	fullscreenButton:false,
	vrButton:false,
	geocoder:false,
	homeButton:false,
	infoBox:false,
	timeline:false,
	sceneModePicker:false,
	navigationHelpButton:false,
	
	  baseLayerPicker : false,
        geocoder : false,
        timeline : false,
        animation : false,
        homeButton : false,
        scene3DOnly : true,
        navigationHelpButton:false,
	 imageryProvider: globemap,
        contextOptions: {
            webgl: {
                alpha: false
            }
        }
	});
	//取消logo
	   viewer._cesiumWidget._creditContainer.style.display = "none";