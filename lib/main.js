//---------------------------------------------------------------------------------
// Yukari-chan generator
// (C) 2017.12.08 @melty_pot
//---------------------------------------------------------------------------------
//セットリスト
var SetList = [
	{ name: 'FACE' },
	{ name: 'HEAD' },
	{ name: 'HAIR' },
	{ name: 'CLOTH' },
	{ name: 'BODY' },
	{ name: 'SHOES' }
];
//パーツリスト
var PartsList = [
	{ name: 'FACE',   set: 'FACE',  zindex: 100 },
	{ name: 'HEAD',   set: 'HEAD',  zindex: 80 },	// 80 10
	{ name: 'HAIR',   set: 'HAIR',  zindex: 70 },	// 75 70 15
	{ name: 'CAPE',   set: 'CLOTH', zindex: 55 },	// 55 20
	{ name: 'TOPS',   set: 'CLOTH', zindex: 50 },	// 50 25
	{ name: 'BOTTOM', set: 'CLOTH', zindex: 45 },	// 45
	{ name: 'BRA',    set: 'BODY',  zindex: 35 },	// 35
	{ name: 'PANTS',  set: 'BODY',  zindex: 35 },	// 35
	{ name: 'LEGS',   set: 'BODY',  zindex: 35 },	// 35
	{ name: 'SHOES',  set: 'SHOES', zindex: 40 }	// 40 30
];
//
var DefaultImages = ['face_00', 'hair_00', 'bra_00', 'pants_00', 'legs_00'];
//パーツデータ
var ImageList = [
	{	name: 'face_00',
		parts: 'FACE',
		image: [
			{ src: 'images/face_00.png', pos: 0 }
		]
	},
	{	name: 'face_01',
		parts: 'FACE',
		image: [
			{ src: 'images/face_01.png', pos: 0 }
		]
	},
	{	name: 'face_02',
		parts: 'FACE',
		image: [
			{ src: 'images/face_02.png', pos: 0 }
		]
	},
	{	name: 'head_01',
		parts: 'HEAD',
		image: [
			{ src: 'images/head_01_1.png', pos: 0 },
			{ src: 'images/head_01_2.png', pos: -70 }	//10
		]
	},
	{	name: 'head_02',
		parts: 'HEAD',
		image: [
			{ src: 'images/head_02.png', pos: 0 },
		]
	},
	{	name: 'hair_00',
		parts: 'HAIR',
		image: [
			{ src: 'images/hair_00_1.png', pos: 5 },	//75
			{ src: 'images/hair_00_2.png', pos: 0 },
			{ src: 'images/hair_00_3.png', pos: -55 }	//15
		]
	},
	{	name: 'cape_01',
		parts: 'CAPE',
		image: [
			{ src: 'images/cape_01_1.png', pos: 0 },
			{ src: 'images/cape_01_2.png', pos: -35 }	//20
		]
	},
	{	name: 'tops_01',
		parts: 'TOPS',
		image: [
			{ src: 'images/tops_01_1.png', pos: 0 },
			{ src: 'images/tops_01_2.png', pos: -25 }	//25
		]
	},
	{	name: 'tops_02',
		parts: 'TOPS',
		image: [
			{ src: 'images/tops_02_1.png', pos: 0 },
			{ src: 'images/tops_02_2.png', pos: -25 }
		]
	},
	{	name: 'tops_03',
		parts: 'TOPS',
		image: [
			{ src: 'images/tops_03.png', pos: 0 }
		]
	},
	{	name: 'bottom_01',
		parts: 'BOTTOM',
		image: [
			{ src: 'images/bottom_01.png', pos: 0 }
		]
	},
	{	name: 'bottom_02',
		parts: 'BOTTOM',
		image: [
			{ src: 'images/bottom_02.png', pos: 0 }
		]
	},
	{	name: 'bottom_03',
		parts: 'BOTTOM',
		image: [
			{ src: 'images/bottom_03.png', pos: 0 }
		]
	},
	{	name: 'onepiece_01',
		parts: ['TOPS', 'BOTTOM'],
		image: [
			{ src: 'images/onepiece_01_1.png', pos: 0 },
			{ src: 'images/onepiece_01_2.png', pos: -25 }	//25
		]
	},
	{	name: 'onepiece_02',
		parts: ['TOPS', 'BOTTOM'],
		image: [
			{ src: 'images/onepiece_02_1.png', pos: 0 },
			{ src: 'images/onepiece_02_2.png', pos: -25 }	//25
		]
	},
	{	name: 'bra_00',
		parts: 'BRA',
		image: [
			{ src: 'images/bra_00.png', pos: 0 }
		]
	},
	{	name: 'bra_01',
		parts: 'BRA',
		image: [
			{ src: 'images/bra_01.png', pos: 0 }
		]
	},
	{	name: 'bra_02',
		parts: 'BRA',
		image: [
			{ src: 'images/bra_02.png', pos: 0 }
		]
	},
	{	name: 'bra_03',
		parts: 'BRA',
		image: [
			{ src: 'images/bra_03.png', pos: 0 }
		]
	},
	{	name: 'bra_04',
		parts: 'BRA',
		image: [
			{ src: 'images/bra_04.png', pos: 0 }
		]
	},
	{	name: 'pants_00',
		parts: 'PANTS',
		image: [
			{ src: 'images/pants_00.png', pos: 0 }
		]
	},
	{	name: 'pants_01',
		parts: 'PANTS',
		image: [
			{ src: 'images/pants_01.png', pos: 0 }
		]
	},
	{	name: 'pants_02',
		parts: 'PANTS',
		image: [
			{ src: 'images/pants_02.png', pos: 0 }
		]
	},
	{	name: 'pants_03',
		parts: 'PANTS',
		image: [
			{ src: 'images/pants_03.png', pos: 0 }
		]
	},
	{	name: 'pants_04',
		parts: 'PANTS',
		image: [
			{ src: 'images/pants_04.png', pos: 0 }
		]
	},
	{	name: 'legs_00',
		parts: 'LEGS',
		image: [
			{ src: 'images/legs_00.png', pos: 0 }
		]
	},
	{	name: 'legs_01',
		parts: 'LEGS',
		image: [
			{ src: 'images/legs_01.png', pos: 0 }
		]
	},
	{	name: 'legs_02',
		parts: 'LEGS',
		image: [
			{ src: 'images/legs_02.png', pos: 0 }
		]
	},
	{	name: 'tights_01',
		parts: ['PANTS', 'LEGS'],
		image: [
			{ src: 'images/tights_01.png', pos: 0 }
		]
	},
	{	name: 'tights_02',
		parts: ['PANTS', 'LEGS'],
		image: [
			{ src: 'images/tights_02.png', pos: 0 }
		]
	},
	{	name: 'shoes_01',
		parts: 'SHOES',
		image: [
			{ src: 'images/shoes_01_1.png', pos: 0 },
			{ src: 'images/shoes_01_2.png', pos: -10 }	//30
		]
	},
	{	name: 'shoes_02',
		parts: 'SHOES',
		image: [
			{ src: 'images/shoes_02.png', pos: 0 }
		]
	},
	{	name: 'shoes_03',
		parts: 'SHOES',
		image: [
			{ src: 'images/shoes_03.png', pos: 0 }
		]
	}
];
//
var SelectedParts = {};
//---------------------------------------------------------------------------------
//メイン処理
function mainPhase(){
	console.log('main.js: mainPhase()');
	//レイヤー生成
	createLayers();
	//パーツリスト生成
	createSetList();
	createPartsList();
	//ランダム画像セット
	setRandomImage();
	//描画
	redrawLayers();
	//ランダムボタン
	if ($('.random').events() == undefined){
		$('.random').on('click', function(){
			clearSelectedParts();
			setRandomImage();
			redrawLayers();
		});
	};
};
//---------------------------
//レイヤー生成
function createLayers(){
	console.log('main.js: createLayers()');
	PartsList.forEach(function(val, id){
		var obj = $('<li class="layer-container"></li>');
		obj.attr('layer-name', val.name);
		$('.layer-list').append(obj);
	});
}
//---------------------------------------------------------------------------------
//セットリスト生成
function createSetList(){
	console.log('main.js: createSetList()');
	SetList.forEach(function(val, id){
		var sets = $(`<div class="parts-set" type="${val.name}"></div>`);
		var header = $('<div class="parts-header"></div>');
		var list = $('<div class="parts-list"></div>');
		//ヘッダー
		header.append(
			$('<div class="parts-header-title"></div>').append(`<h2>${val.name}</h2>`)
		);
		sets.append(header);
		//リスト
		PartsList.forEach(function(e, i){
			if(e.set == val.name){
				list.append($('<ul class="parts-row" type="'+e.name+'"></ul>'));
			}
		});
		sets.append(list);
		//追加
		$('.app-parts').append(sets);
	})
}
//パーツリスト作成
function createPartsList(){
	console.log('main.js: createPartsList()');
	ImageList.forEach(function(val, id){
		var currentset = '';
		var currentparts = '';
		if (Array.isArray(val.parts)){
			currentparts = val.parts[0];
			currentset = getPartsByName('name', currentparts)[0].set;
		}else{
			currentparts = val.parts;
			currentset = getPartsByName('name', currentparts)[0].set;
		}
		$('.parts-set[type='+currentset+'] .parts-list .parts-row[type='+currentparts+']').append(partsButton(val));
		//クリックイベント
		if ($('.parts[parts-name='+val.name+']').events() == undefined){
			$('.parts[parts-name='+val.name+']').on('click', function(){
				partsClick(this);
			});
		};
	});
}
//パーツクリック
function partsClick(element){
	console.log('main.js: partsClick()', $(element).partsName(), $(element).partsStatus());
	if ($(element).partsStatus() == 'enabled'){
		setImages($(element).partsName());
	}else if ($(element).partsStatus() == 'selected'){
		if (DefaultImages.indexOf($(element).partsName()) < 0){
			removeImages($(element).partsName());
		}
	}
	setDefaultImage();
	redrawLayers();
}
//---------------------------
//デフォルト画像セット
function setDefaultImage(){
	console.log('main.js: setDefaultImage()');
	DefaultImages.forEach(function(val, id){
		if (checkSelectedPartsConflict(val) == ''){
			setImages(val);
		}
	});
}
//画像をランダムにセット
function setRandomImage(){
	console.log('main.js: setRandomImage()');
	var ran;
	//
	ran = randomNum(0, 2);
	addSelectedPartsKey('face_' + zeroPadding(ran, 2));
	ran = randomNum(0, 2);
	if (ran > 0){
		addSelectedPartsKey('head_' + zeroPadding(ran, 2));
	}
	ran = randomNum(0, 1);
	if (ran > 0){
		addSelectedPartsKey('cape_' + zeroPadding(ran, 2));
	}
	ran = randomNum(0, 17);
	if (ran > 1){
		ran = randomNum(0, 3);
		if (ran > 0){
			addSelectedPartsKey('tops_' + zeroPadding(ran, 2));
		}
		ran = randomNum(0, 3);
		if (ran > 0){
			addSelectedPartsKey('bottom_' + zeroPadding(ran, 2));
		}
	}else{
		addSelectedPartsKey('onepiece_' + zeroPadding(ran + 1, 2));
	}
	ran = randomNum(0, 4);
	if (ran > 0){
		addSelectedPartsKey('bra_' + zeroPadding(ran, 2));
	}
	ran = randomNum(0, 16);
	if (ran > 1){
		addSelectedPartsKey('pants_' + zeroPadding(randomNum(0, 4), 2));
		addSelectedPartsKey('legs_' + zeroPadding(randomNum(0, 2), 2));
	}else{
		addSelectedPartsKey('tights_' + zeroPadding(ran + 1, 2));
	}
	ran = randomNum(0, 3);
	if (ran > 0){
		addSelectedPartsKey('shoes_' + zeroPadding(ran, 2));
	}
	setDefaultImage();
}
//---------------------------
//選択画像にキーを追加
function addSelectedPartsKey(val){
	SelectedParts[val] = getPartsList(val);
	//ボタンステータス更新
	$('.parts[parts-name='+val+']').partsStatus('selected');
}
//選択画像すべて消去
function clearSelectedParts(){
	SelectedParts = {};
	//ボタンステータス更新
	$('.parts').each(function(i, v){
		$(this).partsStatus('enabled');
	});
}
//指定画像のパーツ名を取得（配列）
function getPartsList(imagename){
	var parts = getImageByName('name', imagename)[0].parts;
	if (!(Array.isArray(parts))){
		parts = [parts];
	}
	return parts;
}
//指定画像が選択中の画像と競合するかどうかチェック
function checkSelectedPartsConflict(imagename){
	var result = '';
	var partsname = getPartsList(imagename)[0];
	for (key in SelectedParts) {
		if(SelectedParts[key].indexOf(partsname) >= 0){
			result = key;
		}
	}
	return result;
}
//指定画像が選択中の画像に含まれるかどうかチェック
function checkSelectedPartsMatch(imagename){
	var result = '';
	for (key in SelectedParts) {
		if(key == imagename){
			result = key;
		}
	}
	return result;
}
//---------------------------
function redrawLayers(){
	console.log('main.js: redrawLayers()');
	//選択リストに存在しない画像を消去
	$('.layer-image').each(function(id, val){
		if (checkSelectedPartsMatch($(val).attr('partsname')) == ''){
			$(val).attr('clear', true);
		}
	});
	//先に描画枚数を取得
	var imagecountmax = 0;
	var imagecount = 0;
	for (key in SelectedParts) {
		partsname = SelectedParts[key][0];
		if ($('.layer-image[partsname='+key+']').length <= 0){
			imagecountmax += getImageByName('name', key)[0].image.length;
		}
	}
	if (imagecountmax == 0){
		clearImages();
	}else{
		//選択画像描画
		for (key in SelectedParts) {
			partsname = SelectedParts[key][0];
			if ($('.layer-image[partsname='+key+']').length <= 0){
				//zindex取得
				var zindex = getPartsByName('name', partsname)[0].zindex;
				//画像表示
				getImageByName('name', key)[0].image.forEach(function(e, i){
					var imgObj = $('<img>');
					//ロード完了後に消去（ちらつき防止）
					imgObj.bind('load', function(){
						imagecount++;
						if (imagecount >= imagecountmax){
							clearImages();
						}
					});
					imgObj.attr('src', e.src);
					imgObj.addClass('layer-image');
					imgObj.attr('partsname', key);
					imgObj.css('z-index', zindex + e.pos);
					$('.layer-container[layer-name='+partsname+']').append(imgObj);
				});
			}
		}
	}
}
function clearImages(){
	$('.layer-image[clear=true]').remove();
}
//---------------------------------------------------------------------------------
//画像セット
function setImages(imagename){
	//console.log('main.js: setImages()', imagename, getImageByName('name', imagename)[0].parts);
	var partsArray = getPartsList(imagename);
	partsArray.forEach(function(val, id){
		//競合パーツ消去
		for (key in SelectedParts) {
			if(SelectedParts[key].indexOf(val) >= 0){
				delete SelectedParts[key];
				$('.parts[parts-name='+key+']').partsStatus('enabled');
			}
		}
	});
	//選択リスト更新
	addSelectedPartsKey(imagename);
	//
}
//画像消去
function removeImages(imagename){
	//console.log('main.js: removeImages()', imagename, getImageByName('name', imagename)[0].parts);
	//選択リスト更新
	delete SelectedParts[imagename];
	//ボタンステータス更新
	$('.parts[parts-name='+imagename+']').partsStatus('enabled');
}
//---------------------------------------------------------------------------------
//パーツボタン生成
function partsButton(val){
	return(`<li><span class="parts parts_enabled" parts-status="enabled" parts-name="${val.name}" parts-type="${val.parts}">${val.name}</span></li>`);
}
//partsStatus(status) status: enabled disabled selected
(function($) {
	$.fn.partsStatus = function(status) {
		if (status != undefined){
			$(this).removeClass('parts_' + $(this).attr('parts-status'));
			$(this).addClass('parts_' + status);
			$(this).attr('parts-status', status);
		}
		return $(this).attr('parts-status');
	}
})(jQuery);
//partsName(name)
(function($) {
	$.fn.partsName = function(name) {
		if (name != undefined){
			$(this).attr('parts-name', name);
		}
		return $(this).attr('parts-name');
	}
})(jQuery);
//partsType(type)
(function($) {
	$.fn.partsType = function(type) {
		if (type != undefined){
			$(this).attr('parts-type', type);
		}
		return $(this).attr('parts-type');
	}
})(jQuery);
//---------------------------------------------------------------------------------
function getPartsByName(key, filter) {
	var result = PartsList.filter( function(value, index) {
		return value[key] == filter;
	});
	return result;
}
//---------------------------
function getImageByName(key, filter) {
	var result = ImageList.filter( function(value, index) {
		return value[key] == filter;
	});
	return result;
}
//---------------------------------------------------------------------------------
//events()
(function($) {
	$.fn.events = function() {
		return $._data($(this).get(0)).events;
	}
})(jQuery);
//---------------------------
function getFileName(url){
	return url.match(".+/(.+?)([\?#;].*)?$")[1];
}
function getFileExt(url){
	return url.match(".+/(.+?)([\?#;].*)?$")[1].split('.')[1];
}
function zeroPadding(num, len){
	return ( Array(len).join('0') + num ).slice( -len );
}
function randomNum(min, max){
	return Math.floor( Math.random() * (max + 1 - min) ) + min ;
}
