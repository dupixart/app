/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
function loadApp() {
//$.get("https://xn--n1aalg.tk/index_mobile.php", function( data ) {
//$( "#app" ).html(data);
//});
//cordova.plugins.browser.open("https://xn--n1aalg.tk/index_mobile.php");
}
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    document.getElementById('splashscreen').classList.add('non-visible');
    if(localStorage.getItem("eula") === null){
        document.getElementById('EULA').classList.remove('non-visible');
    }else{
        document.getElementById('app').classList.remove('non-visible');
        loadApp()
    }
}
function EULAgreeed() {
    if(localStorage.getItem("eula") === null){
    if(document.getElementById('eula-checkbox').value == "on"){
        window.localStorage.setItem("eula",true);
        document.getElementById('EULA').classList.add('non-visible');
        document.getElementById('app').classList.remove('non-visible');
        loadApp();
    }
    }
}
