<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
	float: right;
  }

  ul {
    margin: 0;
	padding: 0;
	float: left;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
	clear: both;
  }

  li {
    display: block;
	float: left;
	color: white;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: white;
    display: block;
    bottom: -1px;
  }

  span {
    color: white;
    font-size: 36px;
	font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  div{
	overflow:hidden;
	text-align: center;
  }
  * {
    background-color: #00e676;
  }
</style>

<div>
  <span>Mazrean`s Portfolio</span>

  <nav>
    <ul>
      <li>
        <a class={segment === 'introduction' ? 'selected' : ''} href="introduction">introduction</a>
      </li>
      <li>
        <a class={segment === 'works' ? 'selected' : ''} href="works">works</a>
      </li>
    </ul>
  </nav>
</div>
