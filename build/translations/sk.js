(function(d){	const l = d['sk'] = d['sk'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Align table to the left":"","Align table to the right":"",Alignment:"",Aquamarine:"Akvamarínová",Background:"",Big:"Veľké",Black:"Čierna","Block quote":"Citát",Blue:"Modrá","Blue marker":"Modrý zvýrazňovač",Bold:"Tučné",Border:"","Bulleted List":"Zoznam s odrážkami","Bulleted list styles toolbar":"",Cancel:"Zrušiť","Cannot upload file:":"Nie je možné nahrať súbor:","Center table":"","Centered image":"Zarovnať na stred","Change image text alternative":"Zmeňte alternatívny text obrázka","Choose heading":"Vyberte nadpis",Circle:"",Color:"","Color picker":"",Column:"Stĺpec","Could not insert image at the current position.":"Obrázok nie je možné vložiť na vybranú pozíciu.","Could not obtain resized image URL.":"Nepodarilo sa získať URL adresu zmenšeného obrázka.",Dashed:"",Decimal:"","Decimal with leading zero":"","Decrease indent":"Zmenšiť odsadenie",Default:"Predvolené","Delete column":"Odstrániť stĺpec","Delete row":"Odstrániť riadok","Dim grey":"Tmavosivá",Dimensions:"",Disc:"","Document colors":"Farby dokumentu",Dotted:"",Double:"",Downloadable:"Na stiahnutie","Dropdown toolbar":"Panel nástrojov roletového menu","Edit block":"Upraviť odsek","Edit link":"Upraviť odkaz","Editor toolbar":"Panel nástrojov editora","Enter image caption":"Vložte popis obrázka","Font Background Color":"Farba zvýraznenia textu","Font Color":"Farba písma","Font Family":"Názov písma","Font Size":"Veľkosť písma","Full size image":"Obrázok v plnej veľkosti",Green:"Zelená","Green marker":"Zelený zvýrazňovač","Green pen":"Zelené pero",Grey:"Sivá",Groove:"","Header column":"Stĺpec hlavičky","Header row":"Riadok hlavičky",Heading:"Nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6",Height:"",Highlight:"Zvýraznenie",Huge:"Veľmi veľké","Image resize list":"Zoznam možností zmeny veľkosti","Image toolbar":"Panel nástrojov obrázka","image widget":"widget obrázka","Increase indent":"Zväčšiť odsadenie","Insert column left":"Vložiť stĺpec vľavo","Insert column right":"Vložiť stĺpec vpravo","Insert image":"Vložiť obrázok","Insert image or file":"Vložiť obrázok alebo súbor","Insert media":"Vložiť média","Insert paragraph after block":"Vložiť odstavec za blok","Insert paragraph before block":"Vložiť odstavec pred blok","Insert row above":"Vložiť riadok nad","Insert row below":"Vložiť riadok pod","Insert table":"Vložiť tabuľku","Inserting image failed":"Vloženie obrázka zlyhalo",Inset:"",Italic:"Kurzíva","Left aligned image":"Zarovnať vľavo","Light blue":"Bledomodrá","Light green":"Bledozelená","Light grey":"Bledosivá",Link:"Odkaz","Link URL":"URL adresa","Lower-latin":"","Lower–roman":"","Media URL":"URL média","media widget":"Nástroj pre médiá","Merge cell down":"Zlúčiť bunku dole","Merge cell left":"Zlúčiť bunku vľavo","Merge cell right":"Zlúčiť bunku vpravo","Merge cell up":"Zlúčiť bunku hore","Merge cells":"Zlúčiť bunky",Next:"Ďalšie",None:"","Numbered List":"Číslovaný zoznam","Numbered list styles toolbar":"","Open in a new tab":"Otvoriť v novej záložke","Open link in new tab":"Otvoriť odkaz v novom okne",Orange:"Oranžová",Original:"Originál",Outset:"",Paragraph:"Odsek","Paste the media URL in the input.":"Vložte URL média.","Pink marker":"Ružový zvýrazňovač",Previous:"Predchádzajúce",Purple:"Fialová",Red:"Červená","Red pen":"Červené pero",Redo:"Znova","Remove color":"Zrušiť farbu","Remove highlight":"Odstrániť zvýraznenie","Resize image":"Zmeniť veľkosť obrázka","Resize image to %0":"Zmeniť veľkosť na %0","Resize image to the original size":"Zmeniť veľkosť na pôvodnú","Rich Text Editor":"Editor s formátovaním","Rich Text Editor, %0":"Editor s formátovaním, %0",Ridge:"","Right aligned image":"Zarovnať vpravo",Row:"Riadok",Save:"Uložiť","Select all":"Označiť všetko","Select column":"","Select row":"","Selecting resized image failed":"Vybranie zmenšeného obrázka zlyhalo","Show more items":"Zobraziť viac položiek","Side image":"Bočný obrázok",Small:"Malé",Solid:"","Split cell horizontally":"Rozdeliť bunku vodorovne","Split cell vertically":"Rozdeliť bunku zvislo",Square:"",Strikethrough:"Preškrtnuté",Style:"",Subscript:"Dolný index",Superscript:"Horný index","Table alignment toolbar":"","Table properties":"","Table toolbar":"Panel nástrojov tabuľky","Text alternative":"Alternatívny text","Text highlight toolbar":"Panel nástrojov zvýraznenia textu","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"","The URL must not be empty.":"Musíte zadať URL.","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"","This link has no URL":"Tento odkaz nemá nastavenú URL adresu","This media URL is not supported.":"URL média nie je podporovaná.",Tiny:"Veľmi malé","Tip: Paste the URL into the content to embed faster.":"Tip: URL adresu média vložte do obsahu.","Toggle the circle list style":"","Toggle the decimal list style":"","Toggle the decimal with leading zero list style":"","Toggle the disc list style":"","Toggle the lower–latin list style":"","Toggle the lower–roman list style":"","Toggle the square list style":"","Toggle the upper–latin list style":"","Toggle the upper–roman list style":"",Turquoise:"Tyrkysová",Underline:"Podčiarknuté",Undo:"Späť",Unlink:"Zrušiť odkaz","Upload failed":"Nahrávanie zlyhalo","Upload in progress":"Prebieha nahrávanie","Upper-latin":"","Upper-roman":"",White:"Biela","Widget toolbar":"Panel nástrojov ovládacieho prvku",Width:"",Yellow:"Žltá","Yellow marker":"Žltý zvýrazňovač"}	);l.getPluralForm=function(n){return (n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));