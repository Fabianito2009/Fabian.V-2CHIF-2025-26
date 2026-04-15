<script lang=ts>
    let duration = $state(60);
    let elapsed = $state(0);
    let isRunning = $state(false);
    let key = {};
 
    function handleSliderChange(e: Event) {
        duration = parseInt((e.target as HTMLInputElement).value);
        elapsed = 0;
        isRunning = false;
    }
 
    function startTimer() {
        isRunning = true;
        let startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed_ms = Date.now() - startTime;
            elapsed = Math.min(elapsed_ms / 1000, duration);
            if (elapsed >= duration) {
                elapsed = duration;
                isRunning = false;
                clearInterval(interval);
            }
        }, 50);
        key = { interval };
    }
 
    function stopTimer() {
        isRunning = false;
        elapsed = 0;
    }
 
    function getCircleProgress() {
        const radius = 80;
        const circumference = 2 * Math.PI * radius;
        const progress = elapsed / duration;
        return circumference * (1 - progress);
    }

    function getCircleColor() {
        const progress = elapsed / duration;
        
        if (progress < 0.5) {
            // Green until 50%
            return 'rgb(45, 142, 45)';
        } else {
            // Smooth Orange to Red transition (50% to 100%)
            const localProgress = (progress - 0.5) / 0.5; // 0 to 1
            const r = 255; // stays at 255
            const g = Math.round(153 - 153 * localProgress); // 153 to 0
            const b = Math.round(0); // stays at 0
            return `rgb(${r}, ${g}, ${b})`;
        }
    }
</script>
 
<div class="container">
    <div class="header">
        <h2>Set Duration (0-100s)</h2>
        <p class="duration-display">{duration} s</p>
    </div>
 
    <div class="slider-container">
        <input 
            type="range" 
            min="0" 
            max="100" 
            bind:value={duration}
            onchange={handleSliderChange}
            class="slider"
        />
    </div>
 
    <div class="display-container">
        <svg class="circle" width="250" height="250" viewBox="0 0 250 250">
            <!-- Background circle -->
            <circle cx="125" cy="125" r="80" fill="none" stroke="#e0e0e0" stroke-width="20" />
            <!-- Progress circle -->
            <circle
                cx="125"
                cy="125"
                r="80"
                fill="none"
                stroke={getCircleColor()}
                stroke-width="20"
                stroke-dasharray={2 * Math.PI * 80}
                stroke-dashoffset={getCircleProgress()}
                stroke-linecap="round"
                transform="rotate(-90 125 125)"
            />
        </svg>
        <div class="time-display">{Math.floor(duration - elapsed)}</div>
    </div>
 
    <div class="button-container">
        <button 
            class="btn btn-start" 
            onclick={startTimer}
            disabled={isRunning}
        >
            START
        </button>
        <button 
            class="btn btn-stop" 
            onclick={stopTimer}
            disabled={!isRunning}
        >
            STOP
        </button>
    </div>
</div>
 
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
        background-color: #f5f5f5;
    }
 
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 600px;
        margin-bottom: 20px;
    }
 
    .header h2 {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin: 0;
    }
 
    .duration-display {
        font-size: 28px;
        font-weight: bold;
        color: #333;
        margin: 0;
    }
 
    .slider-container {
        width: 100%;
        max-width: 600px;
        margin-bottom: 40px;
    }
 
    .slider {
        width: 100%;
        height: 8px;
        border-radius: 5px;
        background: #0066ff;
        outline: none;
        -webkit-appearance: none;
    }
 
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #0066ff;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
 
    .slider::-moz-range-thumb {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #0066ff;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
 
    .display-container {
        position: relative;
        margin-bottom: 40px;
    }
 
    .circle {
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }
 
    .time-display {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 64px;
        font-weight: bold;
        color: #0066ff;
    }
 
    .button-container {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
 
    .btn {
        padding: 16px 40px;
        font-size: 20px;
        font-weight: bold;
        border: 2px solid #0066ff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
 
    .btn-start {
        background-color: #0066ff;
        color: white;
    }
 
    .btn-start:hover:not(:disabled) {
        background-color: #0052cc;
    }
 
    .btn-stop {
        background-color: white;
        color: #0066ff;
    }
 
    .btn-stop:hover:not(:disabled) {
        background-color: #f0f0f0;
    }
 
    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
