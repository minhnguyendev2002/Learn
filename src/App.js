import './App.css';
import CardAdress from './Components/CardAdress/CardAdress';
import CardArtist from './Components/CardArtist/CardArtist';
import CardBlog from './Components/CardBlog/CardBlog';
import CardBlogLagre from './Components/CardBlogLagre/CardBlogLagre';
import CardIcon from './Components/CardIcon/CardIcon';
import CardOffer from './Components/CardOffer/CardOffer';
import CardSearch from './Components/CardSearch/CardSearch';
import Login from './Components/Login/Login';
import Upload from './Components/UploadImage/UploadImage';

function App() {
  return (
    <div className="App container my-5" >
      <div className="row">
        <CardBlogLagre />
        <CardIcon />
        <CardBlog />
        <div className="col-12 col-xl-9 spacing">
          <div className="row">
            <CardSearch />
            <CardAdress />
            <CardArtist />
            <CardOffer />
          </div>
        </div>
        <div className="col-12">
          <Login />
          <Upload />
        </div>
      </div>
    </div>
  );
}
export default App;
