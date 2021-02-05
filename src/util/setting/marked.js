import marked from 'marked';

var renderer = new marked.Renderer();
renderer.image = function(href, title, text) {                                                                                                                                                                       
    if (title) {                                                                                                              
        var size = title.split('x');                                                                                          
        if (size[1]) {                                                                                                        
            size = 'width=' + size[0] + ' height=' + size[1];                                                                 
        } else {                                                                                                              
            size = 'width=' + size[0];                                                                                        
        }                                                                                                                     
    } else {                                                                                                                  
        size = '';                                                                                                            
    }                                                                                                                         
    return ('<img src="' + href + '" alt="' + text + '" ' + size + '>');                                                      
};

marked.setOptions({renderer: renderer});

export default marked;