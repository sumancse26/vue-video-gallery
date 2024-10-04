<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        videoInfo: Object
    });

    const getVideo = ref(props?.videoInfo);
</script>

<template>
    <div>
        <h1 class="text-lg font-semibold tracking-tight text-slate-800">{{ getVideo.title }}</h1>
        <div class="pb-4 flex items-center space-between border-b">
            <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">Uploaded on {{ getVideo.date }}</h2>

            <div class="flex gap-10 w-48">
                <div class="flex gap-1">
                    <div class="shrink-0">
                        <img class="w-5 block" src="../../assets/edit.svg" alt="Edit" />
                    </div>
                    <a class="text-sm leading-[1.7142857] text-slate-600"> Edit </a>
                </div>
                <div class="flex gap-1">
                    <div class="shrink-0">
                        <img class="w-5 block" src="../../assets/delete.svg" alt="Delete" />
                    </div>
                    <div class="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Delete</div>
                </div>
            </div>
        </div>

        <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">{{ getVideo.description }}</div>
    </div>
</template>
