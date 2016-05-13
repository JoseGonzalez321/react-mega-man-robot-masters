'use strict';

module.exports = {
    getData: function getData(url, success, error) {
        let xhr = new XMLHttpRequest();        
        xhr.open('get', (url), true);        
        xhr.withCredentials = false; 
        xhr.onload = function() {
            try {                
                if (xhr.status === 200) {                    
                    success(JSON.parse(xhr.responseText));
                } else {
                    throw "URL " + url + " returned non-200 status: " + xhr.status + ":" + xhr.statusText;
                }
                
            } catch (e) {
                console.error(e);
                
                if (error != null)
                    error(e);               
            }      
        };        
        
        xhr.send();        
        return;    
    }    
}