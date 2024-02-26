import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player InitialName="Player 1" symbol="X" />
          <Player InitialName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
