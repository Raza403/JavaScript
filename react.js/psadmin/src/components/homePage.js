'use strict';
var React = require('react');
var Home = React.createClass({
    render: function(){
        return (
                <div className = "jumbotron">
                    <h1>Plural sight Admin</h1>
                    <p>I am learning react, this is not my first component of react but first for this course</p>
                </div>
        );
    }
});

module.exports = Home;