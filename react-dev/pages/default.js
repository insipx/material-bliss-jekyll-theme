import React, { Component } from 'react';

export default class Default extends Component {
        render() {
            return (
                <html>
                        {`{% include head.html %}`}
                    <body>
                            <div id="root" />
                            <div className="wrapper">
                                    { `{{ content }}`}
                            </div>
                            {`{% include footer.html %}`}
                    </body>

                    {`{% js bundle %}`}
                </html>
            );
        }
}
