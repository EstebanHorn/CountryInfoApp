"use client"
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";


export default function Chart({ data }) {
return (
    
<VictoryChart theme={VictoryTheme.material}>

<VictoryLine
  style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc" },
  }}
  data={data.map((d) => ({ x: d.year, y: d.value/10000}))}
  
/>
<VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => (`${x / 100}M`)}
      />
      <VictoryAxis
        
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => (`${x}`)}
      />
</VictoryChart>
);
}
