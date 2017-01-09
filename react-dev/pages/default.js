import React, { Component } from 'react';

export default class Default extends Component {
        render() {
            return (
                <html>
                        {'{% include head.html %}'}
                    <body>
                            <div id="root" />
                                    { '{{ content }}'}
                            {'{% include footer.html %}'}
                    </body>

                    {'{% js bundle %}'}
                </html>
            );
        }
}
