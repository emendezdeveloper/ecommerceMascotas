<template>
  <div>
    <!-- Header superior -->
    <header class="bg-blue-500 pb-2 shadow-md fixed top-0 left-0 w-full z-50">
      <!-- Top info -->
      <div class="flex justify-between items-center text-base px-8 py-2 text-blue-50">
        <div class="flex gap-8">
          <span>Compras seguras online</span>
          <span>Pago contra entrega</span>
          <span>Entregas el mismo día</span>
        </div>
        <div class="flex gap-4 items-center">
          <span class="hidden sm:inline">Llámanos 3147514973</span>
          <span class="text-xl cursor-pointer">📷</span>
          <span class="text-xl cursor-pointer">📘</span>
          <span class="text-xl cursor-pointer">▶️</span>
        </div>
      </div>
      <!-- Buscador y carrito -->
      <div class="flex items-center gap-2 px-8 py-2">
        <span class="text-2xl">🐶</span>
        <input
          type="text"
          placeholder="¿Qué necesita tu mascota?"
          class="w-[350px] px-4 py-2 rounded-lg border border-blue-200 text-base"
        />
        <button class="bg-blue-900 text-white rounded-lg font-bold px-6 py-2 text-base shadow hover:bg-blue-400 transition ml-2">
          Buscar
        </button>
        <div class="flex-1"></div>
        <button
          class="relative text-2xl text-blue-900 hover:text-blue-700 transition"
          @click="emit('abrirCarrito')"
        >
          <span class="sr-only">Carrito</span>
          <span>🛒</span>
          <span
            v-if="totalUnidades > 0"
            class="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2 font-bold"
            >{{ totalUnidades }}</span
          >
        </button>
      </div>
      <!-- Menú principal -->
      <nav class="flex justify-center gap-8 bg-blue-100 py-3 text-lg font-bold shadow">
        <router-link to="/" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Inicio</router-link>
        <a href="#" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Perro 🐶</a>
        <a href="#" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Gato 🐱</a>
        <router-link to="/servicios" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Servicios</router-link>
        <router-link to="/productos" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Productos</router-link>
        <a href="#" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Promociones</a>
        <a href="#" class="text-blue-900 hover:text-blue-700 hover:bg-blue-200 rounded px-4 py-2 transition">Blog</a>
        <button class="bg-blue-200 text-blue-900 rounded px-4 py-2 ml-4 font-bold hover:bg-blue-300 transition">Miembro</button>
      </nav>
    </header>

    <!-- ESPACIO PARA HEADER FIJO -->
    <div class="pt-[170px]">
      <!-- Banner -->
      <section class="flex justify-center items-center w-full min-h-[180px] bg-white">
        <img src="/banner.png" alt="Banner Mascotas" class="w-full max-w-full h-auto object-cover rounded-none block" />
      </section>
      <!-- Filtros y selección -->
      <section class="bg-blue-100 px-8 py-6 flex flex-col gap-4 items-start w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] box-border">
        <div>
          <span>Estás comprando para:</span>
          <button class="bg-blue-900 text-white rounded px-4 py-2 font-bold mr-4">Perros 🐶</button>
          <button class="bg-blue-500 text-white rounded px-4 py-2 font-bold">Gatos 🐱</button>
        </div>
        <div class="flex gap-4 mt-2 flex-wrap">
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Alimento</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Concentrado</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Seleccione una marca</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Limpiar</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Filtrar Por ▼</button>
          <button class="bg-white border border-blue-200 rounded px-4 py-2 text-blue-900 font-bold">Ordenar Por ▼</button>
        </div>
      </section>
    </div>
  </div>
</template>



<script setup>
import { useCarritoStore } from '../store/carrito'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const carrito = useCarritoStore()
const { totalUnidades } = storeToRefs(carrito)

// const { totalUnidades } = storeToRefs(carrito)
const emit = defineEmits(['abrirCarrito'])


</script>

<!-- <style scoped>
.main-header {
  background: #3b82f6; /* azul principal */
  padding-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}

.main-banner {
  margin-top: 90px; /* Ajusta este valor según la altura real de tu header */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 180px;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.main-banner {
  margin-top: 138px; /* 90px + 48px, ajusta según tu diseño */
}

.main-banner img {
  width: 100vw;
  max-width: 100vw;
  height: auto;
  object-fit: cover;
  border-radius: 0;
  display: block;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  padding: 0.5rem 2rem;
}

.header-icons span {
  margin-right: 1.5rem;
  color: #f3f4f6;
}

.header-social span {
  margin-left: 1rem;
  color: #f3f4f6;
}

.header-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  padding: 0.5rem 2rem;
  gap: 0.5rem;
}

.header-search input {
  width: 500px;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  border: 1px solid #b3dafe;
  font-size: 1rem;
}

.header-search button {
  background: #1e40af;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(59,130,246,0.08);
  transition: background 0.2s;
}

.header-search button:hover {
  background: #3b82f6;
}

.header-search .cart-btn {
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.7rem 1.2rem;
  margin-left: auto;
  position: relative;
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: #ef4444;
  color: white;
  border-radius: 9999px;
  font-size: 0.75rem;
  padding: 2px 6px;
  font-weight: bold;
}

.main-menu {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: #e3f0ff;
  padding: 0.5rem 0;
  font-size: 1.1rem;
}

.main-menu a, .main-menu button {
  color: #3b82f6;
  background: none;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.main-menu a:hover, .main-menu button:hover {
  background: #b3dafe;
}

.member-btn {
  background: #b3dafe;
  color: #3b82f6;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.main-filters {
  background: #e3f0ff;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-sizing: border-box;
}

.filter-btn {
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
}

.filter-btn.active {
  background: #1e40af;
  color: #e3f0ff;
}

.filters-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.filters-row button {
  background: #fff;
  border: 1px solid #b3dafe;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  color: #1e40af;
  font-weight: bold;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 900px) {
  .main-banner {
    margin-top: 80px;
  }
  .main-banner img {
    width: 100vw;
    min-width: 0;
    border-radius: 8px;
  }
  .header-search input {
    width: 100%;
    min-width: 0;
  }
  .header-search {
    flex-direction: column;
    align-items: stretch;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
  .header-search .cart-btn {
    margin-left: 0;
    align-self: flex-end;
  }
  .main-menu {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem 0;
    align-items: stretch;
  }
  .main-menu a, .main-menu button {
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
  }
  .header-top {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
  }
  .header-icons span,
  .header-social span {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-size: 0.95rem;
  }
  .main-filters {
    padding: 1rem;
  }
  .filters-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  .filters-row button {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .main-header {
    padding-bottom: 0.2rem;
  }
  .main-banner {
    margin-top: 70px;
  }
  .main-banner img {
    border-radius: 4px;
  }
  .header-search input {
    font-size: 0.95rem;
    padding: 0.3rem 0.7rem;
  }
  .header-search button,
  .header-search .cart-btn {
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }
  .main-menu {
    font-size: 0.95rem;
  }
}
</style> -->
