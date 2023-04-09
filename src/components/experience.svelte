<script lang="ts">
	import type { Exp } from "./type";
  export let exp: Exp;
</script>

<style>
  .job{
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
  }

  .time{
    font-size: 11px;
    line-height: 25px;
    font-style: italic;
  }

  .experience{
    margin-bottom: 10px;
  }

  .jobdesks{
    font-size: 13px;
    line-height: 20px;
  }

</style>

<div class="experience">
  <div>
    <span class="job">{exp.title}</span>
    <span class="time">{exp.duration}</span>
    <br>
    <span class="company">{exp.company},</span>
    <span class="city">{exp.city}</span>
  </div>
  {#if exp.jobdesks}
    <ul class="jobdesks">
      {#each exp.jobdesks as job}
        <li>{job}</li>
      {/each}
    </ul>
  {/if}
</div>
