            /* ReactDOM.createElement(
                1. What hteml element do you want to make?,
                2. are there any attribute/properties you need to pass so that I can configure this new element?,
                3. what content shal I place into this element OR
                4. Children
                )
            */

    class ToDoList extends React.Component {
        render(){
            React.createElement('ul', {}, [
                React.createElement('li', {}, "First thing"),
                React.createElement('li', {}, "Second thing")
                ]
            );
        }
    }
    
/*
const ToDoList = (props) => {
    React.createElement('ul', {}, [
        React.createElement('li', {}, "First thing"),
        React.createElement('li', {}, "Second thing")
        ]
    );
};
*/