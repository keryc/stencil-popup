import { Component, Event ,EventEmitter, Method, Prop, State, Listen} from '@stencil/core';

@Component({
  tag: 'stencil-popup',
  styleUrl: 'stencil-popup.css',
  shadow: true
})
export class StencilPopup {
  dev: boolean=false;

  popup: any;
  temp_config: object={
    button_text: "Abrir Popup",
    type: "_blank",
    popupOptions: {
      width: 600, 
      height: 679,
      top: window.screenY + ((window.outerHeight - 600) / 2.5),
      left: window.screenX + ((window.outerWidth - 679) / 2)
    }
  };
  @Event() closedPopup!: EventEmitter;
  @Event() redirectPopup!: EventEmitter;

  @Prop() config: object={};

  @State() new_config: object={};

  stringifyOptions(dict) {
    var str = [];
    for(var p in dict){
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
    }
    return str.join(",");
  }

  getFullUrlPath(location) {
    const isHttps = location.protocol === 'https:';
    return location.protocol + '//' + location.hostname +
      ':' + (location.port || (isHttps ? '443' : '80')) +
      (/^\//.test(location.pathname) ? location.pathname : '/' + location.pathname);
  }

  getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  };

  @Method()
  open(url: string, redirectUri: string=""){
    var options = this.stringifyOptions(this.new_config["popupOptions"])

    this.popup = window.open(url, this.new_config["type"], options);

    if (this.popup && this.popup.focus) {
      this.popup.focus();
    }

    if (url === 'about:blank') {
      this.popup.location = url;
    }
    return this.polling(redirectUri);
  }

  polling(redirectUri: string){
    const redirectUriParser = document.createElement('a');
    redirectUriParser.href = redirectUri;
    const redirectUriPath = this.getFullUrlPath(redirectUriParser);
    const polling = setInterval(() => {
        if (!this.popup || this.popup.closed || this.popup.closed === undefined) {
          clearInterval(polling);
          this.closedPopup.emit({"popup": "close"});
        }
        try {
          if (this.popup.location.href !== undefined){
            const popupWindowPath = this.getFullUrlPath(this.popup.location);
            if (popupWindowPath === redirectUriPath) {

              const params = this.getParams(this.popup.location.href);
              this.redirectPopup.emit(params);


              clearInterval(polling);
              this.popup.close();
            }
          }
          
        } catch (error) {
          // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
          // A hack to get around same-origin security policy errors in IE.
        }
      }, 500);
  }

  @Listen('closedPopup')
  closedPopupEvent(event: CustomEvent) {
    if (this.dev){
      console.log(event.detail)
    }
  }

  @Listen('redirectPopup')
  redirectPopupEvent(event: CustomEvent) {
    if (this.dev){
      console.log(event.detail)
    }
  }

  render() {
    this.new_config = Object.assign({}, this.temp_config, this.config);

    if (this.dev){
      return (
        <button onClick={() => this.open("https://kdiaz.me/")}>
          <buttom-text>{ this.new_config["button_text"] }</buttom-text>
        </button>
      )
    }else{
      return (
        <buttom-text>{ this.new_config["button_text"] }</buttom-text>
      )
    }
    
  }
}