<script lang="ts">
  import FaTableTennis from 'svelte-icons/fa/FaTableTennis.svelte'
  import FaBicycle from 'svelte-icons/fa/FaBicycle.svelte'
  import FaGamepad from 'svelte-icons/fa/FaGamepad.svelte'
  import FaBookReader from 'svelte-icons/fa/FaBookReader.svelte'
  import FaWalking from 'svelte-icons/fa/FaWalking.svelte'
  import FaCat from 'svelte-icons/fa/FaCat.svelte'
</script>

<style>
  .icon{
    width: 16px;
    height: 16px;
    margin-top: 3px;
  }

  .section{
    line-height: 23px;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 4px;
    justify-content: start;
  }

  .hobby{
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 50% 50%;

  }
</style>
<div class="hobby">
  <div class="section">
    <div class="icon">
      <FaTableTennis/>
    </div>
    <div>Table Tennis</div>
  </div>

  <div class="section">
    <div class="icon">
      <FaBicycle/>
    </div>
    <div>Cycling</div>
  </div>

  <div class="section">
    <div class="icon">
      <FaGamepad/>
    </div>
    <div>Gaming</div>
  </div>

  <div class="section">
    <div class="icon">
      <FaBookReader/>
    </div>
    <div>Reading</div>
  </div>

  <div class="section">
    <div class="icon">
      <FaWalking/>
    </div>
    <div>Walking</div>
  </div>

  <div class="section">
    <div class="icon">
      <FaCat/>
    </div>
    <div>Play with cat</div>
  </div>
</div>