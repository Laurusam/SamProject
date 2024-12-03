<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"; // 使⽤ useRoute 来获取路由信息
import axios from "axios";
const articleDetails = ref([]);
onMounted(async () => {
    const route = useRoute(); // 获取路由对象
    console.log(route);
    const id = route.params.id; // 获取路由参数
    const res = await axios.get(
        `https://mock.boxuegu.com/mock/3083/articles/${id}`
    );
    console.log(res.data);
    articleDetails.value = res.data.result;
});

// created(){
//     console.log(this.$route.params.id)
// }

</script>
<template>
    <div class="article-detail-page" v-if="articleDetails.id">
        <nav class="nav">
            <span class="back" @click="$router.back()">&lt;</span>
            ⾯经详情
        </nav>
        <header class="header">
            <h1>{{ articleDetails.stem }}</h1>
            <p>
                2022-01-20 | {{ articleDetails.views }} 浏览量 |
                {{ articleDetails.likeCount }} 点赞数
            </p>
            <p>
                <img :src="articleDetails.creatorAvatar" alt="" />
                <span>{{ articleDetails.creatorName }}</span>
            </p>
        </header>
        <main class="body">
            {{ articleDetails.content }}
        </main>
        <!-- 参数路由传参 -->
        <!-- {{ $route.query.id }} -->
        <!-- 动态路由传参数 -->
        {{ $route.params.id }}
    </div>
</template>
<style lang="less" scoped>
.article-detail-page {
    .nav {
        height: 44px;
        border-bottom: 1px solid #e4e4e4;
        line-height: 44px;
        text-align: center;

        .back {
            font-size: 18px;
            color: #666;
            position: absolute;
            left: 10px;
            top: 0;
            transform: scale(1, 1.5);
        }
    }

    .header {
        padding: 0 15px;

        p {
            color: #999;
            font-size: 12px;
            display: flex;
            align-items: center;
        }

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
    }

    .body {
        padding: 0 15px;
    }
}
</style>