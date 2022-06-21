<template>
  <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-y-5 pt-10 pb-5 md:grid-cols-2 md:pb-20 md:pt-5">
    <div class="justify-self-center px-5 md:justify-self-end md:px-0">
      <div class="flex flex-col gap-y-3">
        <div class="text-xl md:text-3xl">Hello!</div>
        <h1 class="text-4xl md:text-6xl">I'm <span class="font-medium text-emerald-500 dark:text-yellow-500">Yann Guineau</span></h1>
        <h2 class="text-2xl md:text-4xl">Web3 & Blockchain Developer</h2>
        <h3 class="text-base text-zinc-400 md:text-xl">I create powerful services and blockchain projects.</h3>
      </div>
      <div class="mt-8 flex gap-y-5 md:mt-16 md:gap-x-14">
        <div class="mx-auto flex items-center justify-start gap-x-3 md:mx-0">
          <div class="text-xl md:text-4xl">+8</div>
          <div class="text-xs uppercase text-slate-400 md:text-sm">years of<br />experience</div>
        </div>
        <div class="mx-auto flex items-center gap-x-3 md:mx-0">
          <div class="text-xl md:text-4xl">+100</div>
          <div class="text-xs uppercase text-slate-400 md:text-sm">projects<br />completed</div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center md:justify-end">
      <svg viewBox="0 0 500 500" class="w-10/12" xmlns="http://www.w3.org/2000/svg">
        <path d="M 219.313 -1.479 Q 238.198 -12.382 257.083 -1.479 L 408.167 85.749 Q 427.052 96.653 427.052 118.46 L 427.052 292.916 Q 427.052 314.723 408.167 325.626 L 257.083 412.855 Q 238.198 423.758 219.313 412.855 L 68.229 325.627 Q 49.344 314.723 49.344 292.916 L 49.344 118.46 Q 49.344 96.653 68.229 85.749 Z" stroke-width="4" stroke="currentColor" fill="none" class="text-emerald-500 dark:text-yellow-500" transform="matrix(0, 1, -1, 0, 455, 50)" />
        <path d="M 229.68 112.244 Q 238.198 107.326 246.716 112.244 L 314.864 151.589 Q 323.382 156.507 323.382 166.343 L 323.382 245.033 Q 323.382 254.869 314.864 259.787 L 246.716 299.132 Q 238.198 304.05 229.68 299.132 L 161.532 259.787 Q 153.014 254.869 153.014 245.033 L 153.014 166.343 Q 153.014 156.507 161.532 151.589 Z" stroke-width="0" stroke="none" fill="currentColor" class="text-emerald-400 dark:text-yellow-400" transform="matrix(0, 1, -1, 0, 340, -10)" />
        <path d="M 229.68 112.244 Q 238.198 107.326 246.716 112.244 L 314.864 151.589 Q 323.382 156.507 323.382 166.343 L 323.382 245.033 Q 323.382 254.869 314.864 259.787 L 246.716 299.132 Q 238.198 304.05 229.68 299.132 L 161.532 259.787 Q 153.014 254.869 153.014 245.033 L 153.014 166.343 Q 153.014 156.507 161.532 151.589 Z" stroke-width="0" stroke="none" fill="currentColor" class="text-emerald-600 dark:text-yellow-600" transform="matrix(0, 1, -1, 0, 550, -120)" />
        <path d="M 229.68 112.244 Q 238.198 107.326 246.716 112.244 L 314.864 151.589 Q 323.382 156.507 323.382 166.343 L 323.382 245.033 Q 323.382 254.869 314.864 259.787 L 246.716 299.132 Q 238.198 304.05 229.68 299.132 L 161.532 259.787 Q 153.014 254.869 153.014 245.033 L 153.014 166.343 Q 153.014 156.507 161.532 151.589 Z" stroke-width="0" stroke="none" fill="currentColor" class="text-emerald-300 dark:text-yellow-300" transform="matrix(0, 1, -1, 0, 570, 120)" />
        <path d="M 233.395 153.002 Q 238.198 150.229 243.001 153.002 L 281.424 175.186 Q 286.227 177.959 286.227 183.504 L 286.227 227.872 Q 286.227 233.418 281.424 236.19 L 243.001 258.374 Q 238.198 261.147 233.395 258.374 L 194.972 236.19 Q 190.169 233.418 190.169 227.872 L 190.169 183.504 Q 190.169 177.959 194.972 175.186 Z" stroke-width="0" stroke="none" fill="currentColor" class="text-emerald-700 dark:text-yellow-700" transform="matrix(0, 1, -1, 0, 385, 170)" />

        <path fill="currentColor" transform="translate(84 177) scale(.2)" class="text-emerald-800 dark:text-yellow-800" d="M220.9 17.65C243.2 4.785 270.6 4.785 292.9 17.65L445.8 105.9C468.1 118.8 481.8 142.6 481.8 168.3V344.9C481.8 370.6 468.1 394.4 445.8 407.2L292.9 495.5C270.6 508.4 243.2 508.4 220.9 495.5L68 407.2C45.72 394.4 32 370.6 32 344.9V168.3C32 142.6 45.72 118.8 68 105.9L220.9 17.65zM127.8 170.6C124.9 163.5 117.4 159.4 109.9 160.9C102.4 162.3 96.92 168.9 96.92 176.6V336.6C96.92 345.4 104.1 352.6 112.9 352.6C121.8 352.6 128.9 345.4 128.9 336.6V259.7L162.1 342.5C164.9 349.6 172.4 353.7 179.9 352.3C187.5 350.8 192.9 344.2 192.9 336.6V176.6C192.9 167.7 185.8 160.6 176.9 160.6C168.1 160.6 160.9 167.7 160.9 176.6V253.5L127.8 170.6zM224.9 336.6C224.9 345.4 232.1 352.6 240.9 352.6C249.8 352.6 256.9 345.4 256.9 336.6V272.6H288.9C297.8 272.6 304.9 265.4 304.9 256.6C304.9 247.7 297.8 240.6 288.9 240.6H256.9V192.6H288.9C297.8 192.6 304.9 185.4 304.9 176.6C304.9 167.7 297.8 160.6 288.9 160.6H240.9C232.1 160.6 224.9 167.7 224.9 176.6V336.6zM336.9 160.6C328.1 160.6 320.9 167.7 320.9 176.6C320.9 185.4 328.1 192.6 336.9 192.6H352.9V336.6C352.9 345.4 360.1 352.6 368.9 352.6C377.8 352.6 384.9 345.4 384.9 336.6V192.6H400.9C409.8 192.6 416.9 185.4 416.9 176.6C416.9 167.7 409.8 160.6 400.9 160.6H336.9z" />
        <path fill="currentColor" transform="translate(313 65) scale(.2)" class="text-emerald-300 dark:text-yellow-300" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
        <path fill="currentColor" transform="translate(312 310) scale(.17)" class="text-emerald-600 dark:text-yellow-600" d="M96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1z" />
        <path fill="currentColor" transform="translate(148 383) scale(.1)" class="text-emerald-500 dark:text-yellow-500" d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
