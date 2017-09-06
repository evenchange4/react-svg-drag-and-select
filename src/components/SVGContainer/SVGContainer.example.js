import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import SVGContainer from '.';

const data = [
  {
    id: '1',
    tagName: 'rect',
    value: 1,
    x: 0,
    y: 0,
    width: 200,
    height: 50,
    fill: 'blue',
    strokeWidth: 1,
    stroke: 'rgb(0,0,0)',
  },
  {
    id: '2',
    tagName: 'text',
    x: 0,
    y: 35,
    children: 'Rect A (value = 1)',
  },
  {
    id: '3',
    tagName: 'polygon',
    value: 2,
    points: '60,20 100,40 100,80 60,100 20,80 20,40',
    fill: 'red',
    strokeWidth: 1,
    stroke: 'rgb(0,0,0)',
  },
  {
    id: '4',
    tagName: 'text',
    x: 0,
    y: 95,
    children: 'Polygon B (value = 2)',
  },
  {
    id: '5',
    tagName: 'circle',
    value: 3,
    cx: 50,
    cy: 200,
    r: 50,
    fill: 'yellow',
    strokeWidth: 1,
    stroke: 'rgb(0,0,0)',
  },
  {
    id: '6',
    tagName: 'text',
    x: 50,
    y: 235,
    children: 'Circle C (yellow = 3)',
  },
];

class App extends React.Component {
  state = { items: data, sum: 0, isMovable: false };
  onSelectChange = selected => {
    const sum = selected
      .filter(item => item.value)
      .map(item => item.value)
      .reduce((acc, value) => acc + value, 0);

    this.setState({ sum });
  };
  onItemsChange = items => {
    this.setState({ items });
  };
  onCheck = e => {
    this.setState({ isMovable: e.target.name === 'Move' });
  };
  render() {
    const { isMovable, items } = this.state;
    return (
      <div>
        <div>
          <p>Input Data: (JSON Format)</p>
          <pre
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: 12,
              lineHeight: '1em',
            }}
          >
            {JSON.stringify(items, null, 2)}
          </pre>
        </div>

        <p>SVG Graph:</p>
        <div>
          <label htmlFor="Select">Select:</label>
          <input
            id="Select"
            name="Select"
            type="radio"
            checked={!isMovable}
            onChange={this.onCheck}
          />
          <label htmlFor="Move">Move:</label>
          <input
            id="Move"
            name="Move"
            type="radio"
            checked={isMovable}
            onChange={this.onCheck}
          />
        </div>
        <SVGContainer
          width={300}
          height={300}
          style={{ backgroundColor: 'aliceblue' }}
          onSelectChange={this.onSelectChange}
          onItemsChange={this.onItemsChange}
          items={items}
          isMovable={isMovable}
          isSelectable={!isMovable}
        />

        <p>Output: (Sum)</p>
        <h2>{this.state.sum}</h2>
      </div>
    );
  }
}

storiesOf('SVGContainer', module).add(
  'API',
  withInfo({
    text: 'SVGContainer with data',
    inline: true,
    propTables: [SVGContainer],
  })(() => <App />),
);
