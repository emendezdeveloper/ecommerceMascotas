<template>
  <div class="bg-blue-100 min-h-screen w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] box-border py-8">
    <!-- ESPACIO PARA HEADER FIJO -->
    <div class="pt-[140px]">
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-screen max-w-full px-4 mx-auto">
      <div
        class="bg-white rounded-xl shadow flex flex-col items-center min-h-[480px] max-w-xs mx-auto p-6"
        v-for="producto in productos"
        :key="producto.id"
      >
        <img :src="producto.imagen" :alt="producto.nombre" class="w-44 h-44 object-contain rounded-xl mb-4 bg-white shadow" />
        <h3 class="text-blue-900 font-bold text-center mb-2 h-16 flex items-center justify-center text-lg truncate w-full">
          {{ producto.nombre }}
        </h3>
        <p class="text-gray-700 mb-2 text-center min-h-[48px] flex items-center justify-center">{{ producto.descripcion }}</p>
        <p class="mb-2 text-center">
          <strong class="text-blue-500">Precio:</strong> ${{ producto.precio }}
        </p>
        <div class="flex-1"></div>
        <button
          @click="agregarAlCarrito(producto)"
          class="mt-4 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded w-full transition"
        >
          Agregar al carrito
        </button>
        <router-link
          :to="`/detalle/producto/${producto.id}`"
          class="mt-2 inline-block text-blue-600 bg-blue-100 px-4 py-2 rounded font-bold border border-blue-200 hover:bg-blue-200 hover:text-blue-900 transition"
        >
          Ver detalle
        </router-link>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import { useCarritoStore } from '../store/carrito'
const productos = ref([
  {
    id: 1,
    nombre: 'Concentrado para perro - Adulto',
    descripcion: 'Saco de 10kg con nutrientes para perros adultos.',
    precio: 90000,
    imagen: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=400&h=400&fit=crop' // perro con fondo blanco
  },
  {
    id: 2,
    nombre: 'Vitaminas para gatos',
    descripcion: 'Frasco con 30 tabletas de suplemento vitamínico.',
    precio: 35000,
    imagen: 'https://images.pexels.com/photos/452046/pexels-photo-452046.jpeg?auto=compress&w=400&h=400&fit=crop' // gato con fondo blanco
  },
  {
    id: 3,
    nombre: 'Antipulgas en spray',
    descripcion: 'Producto dermatológicamente probado, seguro para cachorros.',
    precio: 42000,
    imagen: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&w=400&h=400&fit=crop' // producto con fondo blanco
  },
  {
    id: 4,
    nombre: 'Antipulgas en spray',
    descripcion: 'Producto dermatológicamente probado, seguro para cachorros.',
    precio: 42000,
    imagen: 'https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&w=400&h=400&fit=crop' // producto con fondo blanco
  },
])
// Importamos el store de carrito
// y definimos la función para agregar productos al carrito
const carrito = useCarritoStore()
const agregarAlCarrito = (producto) => {
  const existente = carrito.items.find(item => item.id === producto.id)
  if (existente) {
    existente.cantidad += 1
  } else {
    carrito.items.push({ ...producto, cantidad: 1 })
  }
}
</script>

<style scoped></style>