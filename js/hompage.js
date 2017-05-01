$().ready(
    function() {
        $("body").append("<h1>This is working</h1>");
        $(".navigation").load("navbar.html");
    }

);


function Pot (props) {
    return (
      <button className="pot" onClick={() => props.onClick()}>
        {props.value}
      </button>
    );
  }

class Bonang extends React.Component {
    constructor() {
        super();
        this.state = {
            pots: Array(12).fill(null)
            
        }
    }
    renderPot(i) {
        return <Pot value=
            {this.state.pots[i]} onClick={() => 
               this.handleClick(i)}/>                          
            }
    handleClick(i) {
        const pots =
              this.state.pots.slice();
        
    }
    
    
    
    
    render() {
        return (
            <div className="Bonang">
               
      
        
                <div className="bonang-row">
                  {this.renderPot(0)}{this.renderPot(1)}{this.renderPot(2)}{this.renderPot(3)}{this.renderPot(4)}{this.renderPot(5)}

                </div>

                <div className="board-row">
                  {this.renderPot(6)}{this.renderPot(7)}{this.renderPot(8)}{this.renderPot(9)}{this.renderPot(10)}{this.renderPot(11)}

                </div>
            </div>
            
        
        )
    }
}


ReactDOM.render(
    <Bonang />, 
    document.getElementsById('gamelan')
);