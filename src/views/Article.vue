<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import axios from "axios";
const articles = ref([]);
onMounted(async () => {
    try {
        const res = await axios.get(
            "https://mock.boxuegu.com/mock/3083/articles"
        );
        articles.value = res.data.result.rows;
        console.log(articles.value);
    } catch (error) {
        console.error(`Error fetching articles`, error);
    }
});
</script>
<template>

    <div class="article-page">
        <div class="article-item" v-for="item in articles" :key="item.id" @click="$router.push(`/detail/${item.id}`)">
            <div class="head">
                <img :src="item.creatorAvatar" alt="" />
                <div class="con">
                    <p class="title">{{ item.stem }}</p>
                    <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
                </div>
            </div>
            <div class="body">
                {{ item.content }}
            </div>
            <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
        </div>
    </div>
</template>