<script setup>
import logo from "/images/logo-small.png";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">
        <img class="logo" :src="logo" />
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <NuxtLink to="/products" class="navbar-link">Produkty</NuxtLink>
          <div class="navbar-dropdown">
            <NuxtLink to="/products/coffins" class="navbar-item"
              >Trumny</NuxtLink
            >
            <NuxtLink to="/products/urns" class="navbar-item">Urny</NuxtLink>
            <NuxtLink to="/products/accessory" class="navbar-item"
              >Akcesoria</NuxtLink
            >
          </div>
        </div>
        <NuxtLink to="/about" class="navbar-item">O nas</NuxtLink>
        <NuxtLink to="/contact" class="navbar-item">Kontakt</NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button button-pink">
              <strong>Rejestracja</strong>
            </a>
            <a class="button">Logowanie</a>
            <NuxtLink to="/cart" class="button">
              Koszyk
              <div class="counter" v-if="store.storeCounter.count > 0">
                {{ store.storeCounter.count }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: relative;
  box-shadow: 2px 4px 10px 1px #01111170;
  min-height: 90px;

  .navbar-brand {
    .navbar-item {
      .logo {
        max-height: 4rem;
      }
    }
  }
  .navbar-menu {
    .navbar-end {
      .navbar-item {
        .buttons {
          .button {
            border: none;
            &:hover {
              background-color: #cccccc;
            }

            &.button-pink {
              background-color: #d138bf;
              color: #fff;
              &:hover {
                background-color: #99298c;
              }
            }
            .counter {
              position: absolute;
              text-align: center;
              top: -10px;
              right: -10px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              font-weight: bold;
              background-color: red;
              border-radius: 50%;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
