(this.webpackJsonpwalk_to_the_destination=this.webpackJsonpwalk_to_the_destination||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(6),i=n.n(o),r=(n(13),n(1)),l=n(2),c=n(4),u=n(3),d=(n(14),n(7)),m=n.n(d),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={description:e.getSelectedOptionDescription(e.props.selectedOption,e.props.options)},e.handleHover=function(t){e.setState({description:t.description})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.options,a=t.selectedOption,o=t.onChanged,i=void 0!==n[0].description,r=i?"30%":"100%",l=this.getSelectedOption(a,n);return s.a.createElement("div",{className:"options-container"},s.a.createElement("div",{className:"option-names-container",style:{width:r}},n.map((function(t){return s.a.createElement("button",{key:t.id,style:{textAlign:i?"right":"center"},className:t.id===a?"active":"",onMouseEnter:function(){return e.handleHover(t)},onMouseLeave:function(){return e.handleHover(l)},onClick:function(){return o(t.id,void 0===t.speed?null:t.speed)}},t.name)}))),i?s.a.createElement("div",{className:"option-description-container",style:{width:"60%",left:r}},this.state.description):null)}},{key:"getSelectedOption",value:function(e,t){return t.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedOptionDescription",value:function(e,t){var n=this.getSelectedOption(e,t);return void 0===n?null:n.description}}]),n}(a.Component),p=function e(t,n){Object(r.a)(this,e),this.x=t,this.y=n},f=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},g=function(e,t,n){var a=[];return e.x>=1&&e.x<=t&&e.y>=1&&e.y+1<=n&&a.push(new p(e.x,e.y+1)),e.x>=1&&e.x+1<=t&&e.y>=1&&e.y<=n&&a.push(new p(e.x+1,e.y)),e.x>=1&&e.x<=t&&e.y-1>=1&&e.y<=n&&a.push(new p(e.x,e.y-1)),e.x-1>=1&&e.x<=t&&e.y>=1&&e.y<=n&&a.push(new p(e.x-1,e.y)),a},E=p,v=function(e,t,n){return 1===e.x||e.x===t||1===e.y||e.y===n},w=function(e,t,n,a){for(var s=[],o=1;o<=e;o++)s.push(new E(o,1)),s.push(new E(o,t));for(var i=2;i<t;i++)s.push(new E(1,i)),s.push(new E(e,i));for(var r=3;r<e-1;r+=2)for(var l=3;l<t-1;l+=2)s.push(new E(r,l)),Math.round(Math.random())?s.push(new E(r-1,l)):s.push(new E(r,l-1));var c=v(n)?g(n,e,t):[],u=v(a)?g(a,e,t):[];return s.filter((function(e){return!f(e,n)&&!f(e,a)&&!c.some((function(t){return f(t,e)}))&&!u.some((function(t){return f(t,e)}))}))},y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={algorithms:[{id:"algo-dijkstra",name:"Dijkstra's",description:s.a.createElement("div",null,s.a.createElement("p",null,"Let the node at which we are starting be called the",s.a.createElement("b",null,"initial node"),". Let the",s.a.createElement("b",null,"distance of node",s.a.createElement("i",null,"Y")),"be the distance from the ",s.a.createElement("b",null," initial node"),"to",s.a.createElement("i",null,"Y"),". Dijkstra's algorithm will assign some initial distance values and will try to improve them step by step."),s.a.createElement("ol",null,s.a.createElement("li",null,"Mark all nodes unvisited. Create a set of all the unvisited nodes called the",s.a.createElement("i",null,"unvisited set"),"."),s.a.createElement("li",null,"Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current."),s.a.createElement("li",null,"For the current node, consider all of its unvisited neighbours and calculate their",s.a.createElement("i",null,"tentative"),"distances through the current node. Compare the newly calculated",s.a.createElement("i",null,"tentative"),"distance to the current assigned value and assign the smaller one. For example, if the current node",s.a.createElement("i",null,"A"),"is marked with a distance of 6, and the edge connecting it with a neighbour",s.a.createElement("i",null,"B"),"has length 2, then the distance to",s.a.createElement("i",null,"B"),"through",s.a.createElement("i",null,"A"),"will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept."),s.a.createElement("li",null,"When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the",s.a.createElement("i",null,"unvisited set"),". A visited node will never be checked again."),s.a.createElement("li",null,"If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the",s.a.createElement("i",null,"unvisited set"),"is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished."),s.a.createElement("li",null,'Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.')),s.a.createElement("p",null,'When planning a route, it is actually not necessary to wait until the destination node is "visited" as above: the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").'))},{id:"algo-a*",name:"A*",description:s.a.createElement("div",null,s.a.createElement("p",null,"We create two lists \u2013 ",s.a.createElement("i",null,"Open List")," and"," ",s.a.createElement("i",null,"Closed List"),"(just like Dijkstra Algorithm)"),s.a.createElement("p",null,"1. Initialize the open list",s.a.createElement("br",null),"2. Initialize the closed list put the starting node on the open list (you can leave its"," ",s.a.createElement("strong",null,"f")," at zero)",s.a.createElement("br",null),"3. while the open list is not empty ",s.a.createElement("br",null),"a) find the node with the least ",s.a.createElement("strong",null,"f")," ",'on the open list, call it "q" ',s.a.createElement("br",null),"b) pop q off the open list ",s.a.createElement("br",null),"c) generate q's 8 successors and set their parents to q ",s.a.createElement("br",null),"d) for each successor ",s.a.createElement("br",null),"i) if successor is the goal, stop search successor.",s.a.createElement("strong",null,"g")," = q.",s.a.createElement("strong",null,"g")," + distance between successor and q successor.",s.a.createElement("strong",null,"h")," ","= distance from goal to successor (This can be done using many ways, we will discuss three heuristics- Manhattan, Diagonal and Euclidean Heuristics) successor.",s.a.createElement("strong",null,"f")," = successor.",s.a.createElement("strong",null,"g")," + successor.",s.a.createElement("strong",null,"h"),s.a.createElement("br",null),"ii) if a node with the same position as successor is in the OPEN list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor ",s.a.createElement("br",null),"iii) if a node with the same position as successor is in the CLOSED list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor otherwise, add the node to the open list end (for loop) e) push q on the closed list end (while loop)"," "))},{id:"algo-greedy",name:"Greedy",description:s.a.createElement("div",null,s.a.createElement("p",null,"A",s.a.createElement("b",null,"greedy algorithm"),"is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage. In many problems, a greedy strategy does not usually produce an optimal solution, but nonetheless a greedy heuristic may yield locally optimal solutions that approximate a globally optimal solution in a reasonable amount of time."),s.a.createElement("p",null,"For example, a greedy strategy for the",s.a.createElement("a",{href:"/wiki/Travelling_salesman_problem",title:"Travelling salesman problem"},"travelling salesman problem"),'(which is of a high computational complexity) is the following heuristic: "At each step of the journey, visit the nearest unvisited city." This heuristic does not intend to find a best solution, but it terminates in a reasonable number of steps; finding an optimal solution to such a complex problem typically requires unreasonably many steps. In mathematical optimization, greedy algorithms optimally solve combinatorial problems having the properties of',s.a.createElement("a",{href:"/wiki/Matroid",title:"Matroid"},"matroids"),", and give constant-factor approximations to optimization problems with submodular structure."))}],mazes:[{id:"maze-none",name:"Create"},{id:"maze-binary-tree",name:"Binary Tree"}],speeds:[{id:"speed-faster",name:"Faster",speed:15},{id:"speed-fast",name:"Fast",speed:30},{id:"speed-normal",name:"Normal",speed:45},{id:"speed-slow",name:"Slow",speed:60},{id:"speed-slower",name:"Slower",speed:75}],selectedMazeId:"maze-none"},e.constructMaze=function(t){console.log({walls:t});for(var n=function(n){var a=t[n];setTimeout((function(){var s=document.querySelector("#node-".concat(a.x,"-").concat(a.y));s.classList.remove("node-unvisited"),s.classList.add("node-wall"),n===t.length-1&&setTimeout((function(){e.props.stopLoading(),e.props.onMazeCreated(t,[])}),e.props.speed)}),e.props.speed*n/2)},a=0;a<t.length;a++)n(a)},e.generateMaze=function(t){switch(t){case"maze-binary-tree":e.props.startLoading(),e.props.resetMesh(),console.log("Generate Maze : ",t);var n=w(e.props.rows,e.props.columns,e.props.source,e.props.target);e.constructMaze(n);break;case"maze-none":default:e.resetMesh()}},e.setMazeId=function(t){e.setState({selectedMazeId:t}),document.querySelector(".maze-options-container").classList.remove("show"),e.generateMaze(t)},e}return Object(l.a)(n,[{key:"showAlgorithmOptionsContainer",value:function(){document.querySelector(".algorithm-options-container").classList.add("show")}},{key:"showMazeOptionsContainer",value:function(){document.querySelector(".maze-options-container").classList.add("show")}},{key:"showSpeedOptionsContainer",value:function(){document.querySelector(".speed-options-container").classList.add("show")}},{key:"getSelectedAlgorithm",value:function(e){return this.state.algorithms.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedMaze",value:function(e){return this.state.mazes.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedSpeed",value:function(e){return this.state.speeds.filter((function(t){return t.id===e}))[0]}},{key:"render",value:function(){var e=this.props,t=e.selectedAlgorithmId,n=e.selectedSpeedId,a=e.onAlgorithmChanged,o=e.onSpeedChanged,i=e.startWalking,r=e.clearPath,l=e.destructWalls,c=e.resetMesh;return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar-custom"},s.a.createElement("span",{className:"brand"},s.a.createElement("img",{src:m.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"}),s.a.createElement("span",{className:"my-auto"},"Walk to the Destination")),s.a.createElement("div",{className:"actions-container"},s.a.createElement("button",{id:"btn-clear-path",onClick:function(){return r()}},s.a.createElement("span",null,"Clear Path"),s.a.createElement("i",{className:"fas fa-eraser"})),s.a.createElement("button",{id:"btn-desctruct-walls",onClick:function(){return l()}},s.a.createElement("span",null,"Destruct Walls"),s.a.createElement("i",{className:"fas fa-snowplow"})),s.a.createElement("button",{id:"btn-reset-mesh",onClick:function(){return c()}},s.a.createElement("span",null,"Reset Mesh"),s.a.createElement("i",{className:"fas fa-trash-restore"})),s.a.createElement("button",{id:"btn-start-walking",onClick:function(){return i()}},s.a.createElement("span",null,"Start Walking"),s.a.createElement("i",{className:"fas fa-play-circle"}))),s.a.createElement("div",{className:"walking-options"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("button",{className:"btn-algorithm",onClick:this.showAlgorithmOptionsContainer},s.a.createElement("span",null,this.getSelectedAlgorithm(t).name)," ","Algorithm",s.a.createElement("i",{className:"fas fa-check-double ml-1"}))),s.a.createElement("li",null,s.a.createElement("button",{className:"btn-maze",onClick:this.showMazeOptionsContainer},s.a.createElement("span",null,this.getSelectedMaze(this.state.selectedMazeId).name)," ","Maze",s.a.createElement("i",{className:"fab fa-magento ml-1"}))),s.a.createElement("li",null,s.a.createElement("button",{className:"btn-speed",onClick:this.showSpeedOptionsContainer},"Speed :"," ",s.a.createElement("span",null,this.getSelectedSpeed(n).name)," ",s.a.createElement("i",{className:"fas fa-tachometer-alt"})))))),s.a.createElement("div",{className:"algorithm-options-container"},s.a.createElement(h,{options:this.state.algorithms,selectedOption:t,onChanged:a})),s.a.createElement("div",{className:"maze-options-container"},s.a.createElement(h,{options:this.state.mazes,selectedOption:this.state.selectedMazeId,onChanged:this.setMazeId})),s.a.createElement("div",{className:"speed-options-container"},s.a.createElement(h,{options:this.state.speeds,selectedOption:n,onChanged:o})))}}]),n}(a.Component),S=(n(15),n(16),{NODE_UNVISITED:0,NODE_VISITED:1,NODE_IS_WALL:-1,NODE_IS_SOURCE:10,NODE_IS_TARGET:100,NODE_FALLS_IN_PATH:50,NODE_IS_VISITING:2}),b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.nodeState,n=e.position,a=e.onMouseDown,o=e.onMouseUp,i=e.onMouseEnter,r=e.onMouseLeave;return void 0===i?s.a.createElement("div",{className:this.getNodeStateClass(t)}):s.a.createElement("div",{className:this.getNodeStateClass(t),id:"node-".concat(n.x,"-").concat(n.y),"data-x":n.x,"data-y":n.y,onMouseDown:function(){return a(t,n)},onMouseUp:function(){return o(t,n)},onMouseEnter:function(){return i(t,n)},onMouseLeave:function(){return r(t,n)}})}},{key:"getNodeStateClass",value:function(e){var t="node node-";switch(e){case S.NODE_UNVISITED:t+="unvisited";break;case S.NODE_VISITED:t+="visited";break;case S.NODE_IS_WALL:t+="wall";break;case S.NODE_IS_SOURCE:t+="source";break;case S.NODE_IS_TARGET:t+="target";break;default:t+="unvisited"}return t}}]),n}(a.Component),N=function(){return s.a.createElement("section",{className:"legend-container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(b,{nodeState:S.NODE_UNVISITED,position:new E(-1,-1),disabled:!0}),s.a.createElement("span",{className:"ml-1"},"Unvisited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(b,{nodeState:S.NODE_VISITED,position:new E(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Visited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(b,{nodeState:S.NODE_IS_WALL,position:new E(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Wall"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(b,{nodeState:S.NODE_IS_SOURCE,position:new E(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Source"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(b,{nodeState:S.NODE_IS_TARGET,position:new E(-1,-1)}),s.a.createElement("span",{className:"ml-1"},"Target")))))},O=(n(17),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isMousePressed:!1,movingSource:!1,movingTarget:!1},e}return Object(l.a)(n,[{key:"handleMouseUp",value:function(e,t){this.setState({isMousePressed:!1}),e===S.NODE_IS_SOURCE?this.setState({movingSource:!1}):e===S.NODE_IS_TARGET&&this.setState({movingTarget:!1})}},{key:"handleMouseDown",value:function(e,t){this.setState({isMousePressed:!0}),e===S.NODE_IS_SOURCE?this.setState({movingSource:!0}):e===S.NODE_IS_TARGET?this.setState({movingTarget:!0}):this.props.toggleWall(t)}},{key:"handleMouseEnter",value:function(e,t){this.state.isMousePressed&&(this.state.movingSource?this.props.setNodeAsSource(t):this.state.movingTarget?this.props.setNodeAsTarget(t):this.props.toggleWall(t))}},{key:"handleMouseLeave",value:function(e,t){}},{key:"decideNodeState",value:function(e,t,n,a,s,o){return e===n.x&&t===n.y?S.NODE_IS_SOURCE:e===a.x&&t===a.y?S.NODE_IS_TARGET:s.some((function(n){return n.x===e&&n.y===t}))?S.NODE_IS_WALL:o.some((function(n){return n.x===e&&n.y===t}))?S.NODE_VISITED:S.NODE_UNVISITED}},{key:"render",value:function(){for(var e=this,t=this.props,n=t.rows,a=t.columns,o=t.source,i=t.target,r=t.walls,l=t.visitedNodes,c=(window.innerWidth-20*a)/2,u=(window.innerHeight-190-20*n)/2,d=[],m=1;m<=n;m++)for(var h=1;h<=a;h++){var p="node-"+m+"-"+h,f=this.decideNodeState(m,h,o,i,r,l);d.push(s.a.createElement(b,{key:p,position:new E(m,h),id:p,nodeState:f,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseUp:function(t,n){return e.handleMouseUp(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseLeave:function(t,n){return e.handleMouseLeave(t,n)}}))}return s.a.createElement("section",{className:"grid-container",style:{paddingTop:u,paddingRight:c,paddingBottom:u,paddingLeft:c}},d)}}]),n}(a.Component)),I=(n(18),function(e){var t=e.insights;return s.a.createElement("section",{className:"insights-container"},s.a.createElement("div",null,s.a.createElement("p",null,t)))}),k=(n(19),function(){return s.a.createElement("section",{className:"copyright-container"},s.a.createElement("div",{className:"github-links"},s.a.createElement("a",{href:"https://github.com/shantanu0323"},s.a.createElement("i",{className:"fab fa-github-square"}))),s.a.createElement("div",{className:"copyright"},"Made with ",s.a.createElement("i",{className:"fas fa-heart text-danger"})," by"," ",s.a.createElement("a",{href:"https://shantanu0323.github.io"},"Shantanu Pramanik")),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://www.linkedin.com/in/shantanu-pramanik/"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://www.facebook.com/shantanu.pramanik1"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"https://www.twitter.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://www.instagram.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-instagram-square"}))))}),L=(n(20),n(21),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S.NODE_UNVISITED;Object(r.a)(this,e),this.position=t,this.distance=n,this.nodeState=a}),_=[],x=[],D=function(e){var t=g(e.position,window.rows,window.columns),n=[];return t.map((function(e){var t=_[e.x][e.y];return t.nodeState!==S.NODE_IS_WALL&&(n.push(t),!0)})),n},M=function(e){for(var t,n=D(e).filter((function(e){return _[e.position.x][e.position.y].nodeState===S.NODE_VISITED})),a=1/0,s=0;s<n.length;s++){var o=n[s];o.distance<a&&(a=o.distance,t=o)}return t},T=function(e,t,n,a,s){!function(e,t,n,a,s){window.rows=e,window.columns=t;for(var o=1;o<=window.rows;o++){for(var i=[],r=1;r<=window.columns;r++){var l=new L(new E(o,r));f(l.position,n)?(l.nodeState=S.NODE_IS_SOURCE,l.distance=0):f(l.position,a)&&(l.nodeState=S.NODE_IS_TARGET),x.push(l),i[r]=l}_[o]=i}s.forEach((function(e){_[e.x][e.y].nodeState=S.NODE_IS_WALL}))}(e,t,n,a,s);var o=function(e){for(var t=[],n=function(){for(var n=1/0,a=void 0,s=0;s<x.length;s++)x[s].distance<n&&(n=x[s].distance,a=x[s]);return void 0===a?(console.log("Target NOT Reachable"),"break"):(t.push(a),x=x.filter((function(e){return!f(e.position,a.position)})),f(a.position,e)?(console.log("TARGET REACHED"),"break"):(a.nodeState=a.nodeState===S.NODE_IS_SOURCE?S.NODE_IS_SOURCE:S.NODE_VISITED,void D(a).forEach((function(e){var t=a.distance+1;e.distance=t<e.distance?t:e.distance}))))};x.length>0;){if("break"===n())break}return t}(a);return{visitedNodes:o,path:function(e){for(var t=[],n=e[e.length-1];n.distance>1;)n=M(n),t.unshift(n);return t}(o)}},A=function(){var e=document.querySelector(".node.node-source");e.classList.remove("path-to-top"),e.classList.remove("path-to-right"),e.classList.remove("path-to-bottom"),e.classList.remove("path-to-left");var t=document.querySelector(".node.node-target");t.classList.remove("path-to-top"),t.classList.remove("path-to-right"),t.classList.remove("path-to-bottom"),t.classList.remove("path-to-left")},C=(n(22),function(e){var t=e.loading?"loader-container show":"loader-container hide";return s.a.createElement("div",{className:t},s.a.createElement("div",{className:"top-bar"}),s.a.createElement("div",{className:"right-bar"}),s.a.createElement("div",{className:"bottom-bar"}),s.a.createElement("div",{className:"left-bar"}))}),z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedAlgorithmId:"algo-dijkstra",selectedSpeedId:"speed-fast",speed:15,rows:0,columns:0,source:new E(-1,-1),target:new E(-1,-1),walls:[],visitedNodes:[],loading:!1},e.startLoading=function(){e.setState({loading:!0})},e.stopLoading=function(){e.setState({loading:!1})},e.setAlgorithmId=function(t){e.setState({selectedAlgorithmId:t}),document.querySelector(".algorithm-options-container").classList.remove("show")},e.setSpeedId=function(t,n){e.setState({selectedSpeedId:t,speed:n}),document.querySelector(".speed-options-container").classList.remove("show")},e.setNodeAsSource=function(t){if(t.x!==e.state.target.x||t.y!==e.state.target.y){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))&&(n=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({source:t,walls:n})}},e.setNodeAsTarget=function(t){if(t.x!==e.state.source.x||t.y!==e.state.source.y){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))&&(n=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({target:t,walls:n})}},e.toggleWall=function(t){var n=e.state.walls;n.some((function(e){return e.x===t.x&&e.y===t.y}))?n=n.filter((function(e){return!(e.x===t.x&&e.y===t.y)})):n.push(t),e.setState({walls:n})},e.putNodeInPath=function(e,t){return f(e,new E(t.x-1,t.y))?"top":f(e,new E(t.x,t.y+1))?"right":f(e,new E(t.x+1,t.y))?"bottom":f(e,new E(t.x,t.y-1))?"left":"null"},e.startWalking=function(){e.startLoading(),A();for(var t=1;t<=e.state.rows;t++)for(var n=1;n<=e.state.columns;n++){var a=document.querySelector("#node-".concat(t,"-").concat(n));(a.classList.contains("node-visited")||a.classList.contains("node-path"))&&(a.classList.remove("node-visited"),a.classList.remove("node-path"),a.classList.add("node-unvisited"))}setTimeout((function(){console.log("START WALKING");for(var t=T(e.state.rows,e.state.columns,e.state.source,e.state.target,e.state.walls),n=t.visitedNodes,a=t.path,s=function(t){setTimeout((function(){var s=document.querySelector("#node-".concat(n[t].position.x,"-").concat(n[t].position.y));s.classList.contains("node-unvisited")&&(s.classList.remove("node-unvisited"),s.classList.add("node-visited")),t===n.length-1&&setTimeout((function(){if(n[t].position.x===e.state.target.x&&n[t].position.y===e.state.target.y){document.querySelector(".node.node-source").classList.add("path-to-".concat(e.putNodeInPath(a[0].position,e.state.source))),console.log(a[a.length-1]);for(var s=function(t){setTimeout((function(){var n=a[t],s=document.querySelector("#node-".concat(n.position.x,"-").concat(n.position.y));s.classList.remove("node-visited"),s.classList.add("node-path"),t===a.length-1&&(document.querySelector(".node.node-target").classList.add("path-to-".concat(e.putNodeInPath(a[a.length-1].position,e.state.target))),e.stopLoading())}),e.state.speed*t)},o=0;o<a.length;o++)s(o)}else alert("Target NOT Reachable"),e.stopLoading()}),e.state.speed+500)}),e.state.speed*t)},o=0;o<n.length;o++)s(o)}),500)},e.clearPath=function(){e.setState({visitedNodes:[]});for(var t=1;t<=e.state.rows;t++)for(var n=1;n<=e.state.columns;n++){var a=document.querySelector("#node-".concat(t,"-").concat(n));(a.classList.contains("node-visited")||a.classList.contains("node-path"))&&(a.classList.remove("node-visited"),a.classList.remove("node-path"),a.classList.add("node-unvisited"))}A()},e.destructWalls=function(){e.setState({walls:[]})},e.resetMesh=function(){e.clearPath(),e.destructWalls()},e.updateMaze=function(t,n){e.setState({walls:t,visitedNodes:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.crossOrigin="anonymous",e.src="https://kit.fontawesome.com/f7fe82406d.js",document.body.appendChild(e);var t=window.innerHeight-190,n=window.innerWidth,a=parseInt((t-40)/20),s=parseInt((n-40)/20),o=new E(parseInt(.5*a),parseInt(.3*s)),i=new E(parseInt(.5*a),parseInt(.7*s));this.setState({rows:a,columns:s,source:o,target:i})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{loading:this.state.loading}),s.a.createElement(y,{selectedAlgorithmId:this.state.selectedAlgorithmId,selectedSpeedId:this.state.selectedSpeedId,onAlgorithmChanged:this.setAlgorithmId,onSpeedChanged:this.setSpeedId,startWalking:this.startWalking,clearPath:this.clearPath,destructWalls:this.destructWalls,resetMesh:this.resetMesh,rows:this.state.rows,columns:this.state.columns,source:this.state.source,target:this.state.target,speed:this.state.speed,onMazeCreated:this.updateMaze,startLoading:this.startLoading,stopLoading:this.stopLoading}),s.a.createElement(O,{rows:this.state.rows,columns:this.state.columns,source:this.state.source,target:this.state.target,walls:this.state.walls,visitedNodes:this.state.visitedNodes,setNodeAsSource:this.setNodeAsSource,setNodeAsTarget:this.setNodeAsTarget,toggleWall:this.toggleWall}),s.a.createElement(N,null),s.a.createElement(I,{insights:"Insights"}),s.a.createElement(k,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a887afc0.chunk.js.map