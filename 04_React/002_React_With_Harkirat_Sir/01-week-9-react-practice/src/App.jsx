import Card from "./card.jsx";

function App() {
  return (
    <div>
      <Card name="Pooja">
        <p>Hi</p>
        <h1> Hello Pooja</h1>
      </Card>

      {/* // <div>Hi Pooja </div> */}
      <Card>
        <h1> Hello Pooja</h1>
      </Card>
    </div>
  );
}

export default App;
