<div class="header">
  <div class="profile">
    <div class="name">
      <div class="first">Muhammad</div>
      <span class="callname">Sidratul</span>  Muntaha
    </div>
    <div class="title">Manager and Fullstack Enginner</div>
    <div class="exp">+10 YRS EXP</div>
  </div>
  <Contact/>
</div>

<script>
	import Contact from "./contact.svelte";
</script>

<style>
  .header{
    margin-bottom: 20px;
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;
  }

  .name{
    font-size: 36px;
  }

  .first{
    font-size: 26px;
  }

  .callname{
    font-weight: bold;
    color: #478bf2;
  }

  .title{
    margin-bottom: 3px;
    font-size: 20px;
  }

  .exp{
    color: #bbb;
    font-size: 12px;
  }

</style>