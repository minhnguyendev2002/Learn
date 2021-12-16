import './App.css';
import CardAdress from './Components/CardAdress/CardAdress';
import CardArtist from './Components/CardArtist/CardArtist';
import CardBlog from './Components/CardBlog/CardBlog';
import CardBlogLagre from './Components/CardBlogLagre/CardBlogLagre';
import CardIcon from './Components/CardIcon/CardIcon';
import CardOffer from './Components/CardOffer/CardOffer';
import CardSearch from './Components/CardSearch/CardSearch';

function App() {
  return (
    <div className="App container my-5" >
      <div className="row">
        <CardBlogLagre />
        <CardIcon />
        <CardBlog />
        <div className="col-9 spacing">
          <div className="row">
            <CardSearch />
            <CardAdress />
            <CardArtist />
            <CardOffer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
