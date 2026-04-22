<script lang="ts">
	import type { Exp } from "./type";
  export let exp: Exp;
</script>

<style global>

  .company{
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
  }
  .job{
    font-size: 14px;
  }

  .time{
    font-size: 11px;
    font-style: italic;
  }

  .experience{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 80px;
    margin-bottom: 30px;
  }

  .experience.compact{
    gap: 2px;
    margin-bottom: 14px;
  }

  .experience.compact .company{
    font-size: 15px;
  }

  .experience.compact .job{
    font-size: 12px;
  }

  .description{
    text-align: justify;
  }
</style>

<div class="experience" class:compact={!exp.description}>
  <div>
    <span class="company">{exp.company},</span>
    <span class="city">{exp.city}</span>
    <br/>
    <span class="job">{exp.title}</span>
    <span class="time">{exp.duration}</span>
    <br/>
    <!-- {#if exp.webs}
    <div class="products">
      {#each exp.webs as web}
        <div>{web}</div>
      {/each}
    </div>
    {/if}  -->
  </div>
  
  {#if exp.description}
    <div class="description">
      {@html exp.description}
    </div>
  {/if}


  <!-- {#if exp.jobdesks}
    <ul class="jobdesks">
      {#each exp.jobdesks as job}
        <li>{job}</li>
      {/each}
    </ul>
  {/if} -->
</div>
