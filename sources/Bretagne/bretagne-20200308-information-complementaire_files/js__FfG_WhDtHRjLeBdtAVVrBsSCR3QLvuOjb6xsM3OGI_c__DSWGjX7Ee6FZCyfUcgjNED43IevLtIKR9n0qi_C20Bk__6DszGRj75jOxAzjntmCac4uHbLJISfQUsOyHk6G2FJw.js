/* Source and licensing information for the line(s) below can be found at https://france3-regions.francetvinfo.fr/bretagne/sites/all/modules/custom/fr3r_panes/plugins/content_types/newscast_alert/newscast_alert.js. */
;var NEWSCAST=NEWSCAST||{};(function(e,t){Drupal.behaviors.fr3rNewscastAlert={attach:function(t,i){e('body').once('fr3rJtAlert',function(){if(typeof(e('.fr3-newscast-alert')[0])!='undefined'){e('.fr3-newscast-alert a.link-jt').once(function(){e(this).click(function(){var t=768,i=800,n=(screen.height-i)/2,o=(screen.width-t)/2;window.open(e(this).attr('href'),'newWin','top='+n+',left='+o+',width='+t+',height='+i+',toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,copyhistory=1');return!1})});e.ajax('/staticftv/syncDate/syncDateGetter',{success:function(n,o,c){var a=window.ServerDate.getCurrentDate(),t=new Date(a*1000),r=i.fr3rNewscastAlert.hasLocales,s=i.fr3rNewscastAlert.hasMatinales;if(r&&t.getHours()==19&&t.getMinutes()>=0&&t.getMinutes()<=25){e('.fr3-newscast-alert').hide().fadeIn()}
else if((t.getHours()==12||t.getHours()==19)&&t.getMinutes()<=25){e('.fr3-newscast-alert').hide().fadeIn()}
else if(s&&t.getHours()>=7&&t.getHours()<9){if(t.getDay()==6||t.getDay()==0){e('.fr3-newscast-alert').hide()}
else{e('.fr3-newscast-alert').hide().fadeIn()}}
else{e('.fr3-newscast-alert').hide()}},type:'HEAD'})}})}};function i(){var e='regions',i=['auvergne-rhone-alpes','bourgogne-franche-comte','bretagne','centre-val-de-loire','corse','grand-est','hauts-de-france','normandie','nouvelle-aquitaine','occitanie','paris-ile-de-france','pays-de-la-loire','provence-alpes-cote-d-azur','martinique','reunion','nouvellecaledonie','guyane','mayotte','polynesie','wallisfutuna','saintpierremiquelon','guadeloupe'],n=new RegExp('(\/|r=)('+i.join('|')+')'),o=window.location.pathname+window.location.search,t=n.exec(o);if(t!=null){e=t[2]};return e};t.Cookie={init:function(region=''){this.config={Cookie:{time:{days:1,hours:2,minutes:60},name:'_InfoJTCookieRegionFR3'+region,value:'true'},};var n=this,o=t.Cookie.GetCookie(n.config.Cookie.name);if(o!=='true'){t.Cookie.TriggerCookie()}
else{e('.fr3-newscast-alert').addClass('hidden')}},TriggerCookie:function(){var t=this;e('.fr3-newscast-alert .bandeau-alert--close').on('click',function(){e(this).closest('.fr3-newscast-alert').hide();var n=new Date(),i=new Date();i.setTime(n.getTime()+(t.config.Cookie.time.days*t.config.Cookie.time.hours*t.config.Cookie.time.minutes*60*1000));document.cookie=t.config.Cookie.name+'='+t.config.Cookie.value+';expires='+i.toUTCString()+';path=/'})},GetCookie:function(e){var i='; '+document.cookie,t=i.split('; '+e+'=');if(t.length===2)return t.pop().split(';').shift()}};e(function(){var e=i();t.Cookie.init(e)})})(jQuery,NEWSCAST);;
/* Source and licensing information for the above line(s) can be found at https://france3-regions.francetvinfo.fr/bretagne/sites/all/modules/custom/fr3r_panes/plugins/content_types/newscast_alert/newscast_alert.js. */
;/*})'"*/