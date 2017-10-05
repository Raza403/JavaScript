$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require ("./components/about/aboutPage");


var app = React.createClass({
    render: function() {
        var child ;

        switch(this.props.route){
            case 'about': child = About; break;
            default: child = Home
        }
        return(
            <div>
                <child />
            </div>
        );
    } 
});
win.addEventListener('hashchange', render);
render();
React.render(<Home />, document.getElementById('app'));