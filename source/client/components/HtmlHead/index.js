import React, { Component } from "react";
import Helmet from "react-helmet";

import { url } from '../../constants/config';

class HtmlHead extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <Helmet
        htmlAttributes={{ "lang": "en", "amp": undefined }} // amp takes no value
        title={title}
        titleTemplate={`${name} | %s`}
        defaultTitle={name}
        base={{ "target": "_blank", "href": url }}
        meta={[
          { "name": "description", "content": `${name} Application` },
          { "property": "og:type", "content": "reports" }
        ]}
        link={[
          { "rel": "stylesheet", "href": "/index.css" },
          { "rel": "apple-touch-icon", "href": "/assets/images/apple-touch-icon-57x57.png" },
          { "rel": "apple-touch-icon", "sizes": "72x72", "href": "/assets/images/apple-touch-icon-72x72.png" }
        ]}
        script={[
          {
            innerHTML: `{
              var WebFontConfig = {
                google: { families: [ 'Roboto:400,300,500:latin' ] }
              };
              (function() {
                var wf = document.createElement('script');
                wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
              })();
            }` }
        ]} // This script adds the Roboto font to our project. For more detail go to this site:  http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500
        // onChangeClientState={newState => newState}
        />
    );
  }
}

export default HtmlHead
