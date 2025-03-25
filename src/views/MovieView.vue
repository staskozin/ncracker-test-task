<script setup>
import HorizontalRule from '@/components/HorizontalRule.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import MovieCard from '@/components/MovieCard.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink
    to="/"
    class="backlink"
  >
    <IconArrow />
    Назад к списку
  </RouterLink>
  <HorizontalRule />
  <MovieCard
    poster="https://image.openmoviedb.com/kinopoisk-images/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig"
    title="Побег из Шоушенка"
    :year="1994"
    description="Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения."
    :genres="['Драма']"
    :directors="['Фрэнк Дарабонт']"
    :actors="['Тим Роббинс', 'Морган Фриман', 'Боб Гантон', 'Уильям Сэдлер', 'Клэнси Браун', 'Джил Беллоуз', 'Марк Ролстон', 'Джеймс Уитмор', 'Джеффри ДеМанн', 'Ларри Бранденбург', 'Диомид Виноградов', 'Игорь Старосельцев', 'Никита Прозоровский', 'Олег Вирозуб', 'Василий Дахненко']"
    duration="142 мин. / 02:22"
  />
</template>

<style>
.backlink {
  display: flex;
  color: var(--accent-light-color);
  font-size: 20px;
  line-height: 1;
  gap: 8px;
  align-items: center;
  text-decoration-skip-ink: none;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  margin-bottom: 20px;
}
</style>
