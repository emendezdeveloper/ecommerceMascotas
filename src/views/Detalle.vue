<template>
  <div v-if="item" class="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 mt-10 mb-10">
    <div class="pt-[150px]">
   
    <div class="flex flex-col md:flex-row gap-8 items-start">

      <!-- Imagen -->
      <img
        v-if="item.imagen"
        :src="item.imagen"
        :alt="item.nombre"
        class="w-full max-w-xs h-56 object-cover rounded-lg mb-6 md:mb-0"
      />
      <!-- Info -->
      <div class="flex-1">
        <!-- Badge categoría -->
        <span v-if="item.categoria" class="inline-block bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full mb-2 font-semibold">
          {{ item.categoria }}
        </span>
        <!-- Nombre -->
        <h1 class="text-3xl font-bold text-blue-900 mb-2">{{ item.nombre }}</h1>
        <!-- Descripción -->
        <p class="text-gray-700 mb-4">{{ item.descripcionLarga || item.descripcion }}</p>
        <!-- Precio -->
        <div class="flex items-center gap-3 mb-1">
          <span class="text-2xl font-bold text-blue-900">${{ item.precio.toLocaleString('es-CO') }}</span>
          <span v-if="item.precioAnterior" class="text-gray-400 line-through text-lg">${{ item.precioAnterior.toLocaleString('es-CO') }}</span>
          <span v-if="item.descuento" class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{{ item.descuento }}% OFF</span>
        </div>
        <div class="text-gray-400 text-sm mb-4">Precio incluye IVA</div>
        <!-- Características -->
        <div v-if="item.caracteristicas && item.caracteristicas.length" class="mb-4">
          <h2 class="font-bold mb-2">Características:</h2>
          <ul class="list-disc list-inside space-y-1 text-blue-900">
            <li v-for="(car, i) in item.caracteristicas" :key="i" class="text-base">{{ car }}</li>
          </ul>
        </div>
        <!-- Selector de cantidad -->
        <div class="mb-6">
          <label class="block font-bold mb-1">Cantidad:</label>
          <div class="flex items-center gap-2">
            <button @click="cantidad = Math.max(1, cantidad-1)" class="w-8 h-8 rounded border border-gray-300 text-lg font-bold hover:bg-gray-100">-</button>
            <input type="text" v-model="cantidad" class="w-12 text-center border border-gray-300 rounded" readonly>
            <button @click="cantidad++" class="w-8 h-8 rounded border border-gray-300 text-lg font-bold hover:bg-gray-100">+</button>
          </div>
        </div>
        <!-- Botones -->
        <div class="flex flex-col gap-2">
          <button
            @click="agregarAlCarrito"
            class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded w-full flex items-center justify-center gap-2 text-base transition"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"></path></svg>
            Agregar al carrito
          </button>
          <button class="bg-white border border-blue-700 text-blue-700 font-bold py-3 rounded w-full hover:bg-blue-50 transition">
            Comprar ahora
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>

  <div v-else class="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-10 mb-10 text-center">
    <p class="text-red-500 font-bold">Ítem no encontrado.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCarritoStore } from '../store/carrito'

const route = useRoute()
const carrito = useCarritoStore()
const cantidad = ref(1)

const productos = [
  { 
    id: 2, 
    nombre: 'Vitaminas para gatos', 
    descripcion: 'Frasco con 30 tabletas de suplemento vitamínico.',
    descripcionLarga: 'Frasco con 30 tabletas de suplemento vitamínico especialmente formulado para mantener la salud y vitalidad de tu gato.',
    precio: 35000,
    precioAnterior: 40000,
    descuento: 12,
    categoria: 'Suplemento Vitamínico',
    caracteristicas: [
      '30 tabletas por frasco',
      'Fórmula especial para gatos',
      'Rico en vitaminas A, B, C y E',
      'Mejora el sistema inmunológico'
    ],
    imagen: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80'
  },
  // ...otros productos
]

const tipo = route.params.tipo
const id = parseInt(route.params.id)

const item = computed(() => {
  if (tipo === 'producto') {
    return productos.find(p => p.id === id)
  }
  return null
})

const agregarAlCarrito = () => {
  if (item.value) {
    carrito.agregarItem({ ...item.value, tipo, cantidad: cantidad.value })
  }
}
</script>