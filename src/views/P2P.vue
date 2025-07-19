<template>
  <div class="p2p-bg">
    <!-- Header Warning -->
    <div class="p2p-warning">
      <span>Modo de pruebas. No habrá afectación monetaria a los medios de pago</span>
    </div>

    <div class="p2p-container">
      <!-- Left Column -->
      <div class="p2p-left">
        <h1 class="p2p-title">La tienda de</h1>
        <h2 class="p2p-tavo">TAVO</h2>
        <div class="p2p-check">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#22c55e"/>
            <path d="M7 13l3 3 7-7" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="p2p-success">Transacción Aprobada</h3>
        <div class="p2p-data">
          <div class="p2p-row">
            <span>Método de pago</span>
            <span class="p2p-paymethod">
              <span class="p2p-paymethod-icon">D</span>
              <span class="p2p-mono">•••• 0008</span>
            </span>
          </div>
          <div class="p2p-row">
            <span>Total pagado</span>
            <span class="p2p-bold">$100.000,00</span>
          </div>
          <div class="p2p-row">
            <span>Autorización / CUS</span>
            <span class="p2p-mono">000000</span>
          </div>
          <div class="p2p-row">
            <span>Fecha de transacción</span>
            <span>2025-07-15 20:16:30</span>
          </div>
          <div class="p2p-row">
            <span>Recibo</span>
            <span class="p2p-mono">99928591</span>
          </div>
          <div class="p2p-row">
            <span>Dirección IP</span>
            <span class="p2p-mono p2p-ip">2800:484:7f89:e200:d51:f56e:7360:42</span>
          </div>
          <div class="p2p-row">
            <span>Código Respuesta</span>
            <span class="p2p-mono">00</span>
          </div>
        </div>
        <button class="p2p-btn">Volver al comercio</button>
        <p class="p2p-mail">
          El comprobante será enviado a <span class="p2p-bold">mendezvanegasdevelop0830@gmail.com</span>
        </p>
      </div>
      <!-- Right Column -->
      <div class="p2p-right">
        <div class="p2p-summary-header">
          <span class="p2p-bold">Total pagado</span>
          <span class="p2p-summary-id">S3411106-T50</span>
        </div>
        <div class="p2p-summary-amount">
          $100.000,00 <span class="p2p-currency">COP</span>
        </div>
        <div class="p2p-summary-desc">Gray Ninja Jacket</div>
        <button class="p2p-print-btn">
          <span class="p2p-print-icon"></span>
          Imprimir
        </button>
        <div class="p2p-divider"></div>
        <div class="p2p-detail-header">
          <span class="p2p-bold">Detalle del pago</span>
          <span class="p2p-chevron"></span>
        </div>
        <div class="p2p-detail-row">
          <span>Referencia</span>
          <span>1752628225120</span>
        </div>
        <div class="p2p-detail-row">
          <span>Fecha de solicitud</span>
          <span>2025-07-15 20:10:46</span>
        </div>
        <div class="p2p-divider"></div>
        <div class="p2p-status">
          <span class="p2p-status-dot"></span>
          <span>El proceso ha finalizado hace 23 minutos</span>
        </div>
        <div class="p2p-help">
          <span class="p2p-help-icon"></span>
          <span>Obtén ayuda en dnetix@yopmail.com</span>
        </div>
        <div class="p2p-brand">
          <span class="p2p-brand-dot"></span>
          <span class="p2p-brand-p">P</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p2p-bg {
  min-height: 100vh;
  background: #f9fafb;
  padding: 0;
}
.p2p-warning {
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 12px 0;
  margin: 24px auto 32px auto;
  max-width: 900px;
  text-align: center;
  color: #b45309;
  font-size: 15px;
}
.p2p-container {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}
.p2p-left {
  padding: 48px 32px 32px 32px;
  border-right: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p2p-title {
  font-size: 2rem;
  font-weight: 300;
  color: #374151;
  margin-bottom: 8px;
  text-align: center;
}
.p2p-tavo {
  font-size: 3rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 32px;
  text-align: center;
}
.p2p-check {
  margin-bottom: 16px;
}
.p2p-check svg {
  width: 64px;
  height: 64px;
  display: block;
}
.p2p-success {
  color: #22c55e;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 32px;
  text-align: center;
}
.p2p-data {
  width: 100%;
  margin-bottom: 32px;
}
.p2p-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #374151;
}
.p2p-paymethod {
  display: flex;
  align-items: center;
  gap: 6px;
}
.p2p-paymethod-icon {
  background: #2563eb;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 6px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.p2p-mono {
  font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  font-size: 1rem;
}
.p2p-ip {
  font-size: 0.9rem;
}
.p2p-bold {
  font-weight: 600;
}
.p2p-btn {
  width: 100%;
  margin-top: 24px;
  background: #3b82f6;
  color: #fff;
  padding: 14px 0;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.p2p-btn:hover {
  background: #2563eb;
}
.p2p-mail {
  text-align: center;
  font-size: 0.95rem;
  color: #6b7280;
  margin-top: 18px;
}
.p2p-right {
  padding: 48px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.p2p-summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  font-size: 1.1rem;
}
.p2p-summary-id {
  color: #6b7280;
  font-size: 0.95rem;
}
.p2p-summary-amount {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.p2p-currency {
  font-size: 1rem;
  font-weight: 400;
  color: #6b7280;
  margin-left: 4px;
}
.p2p-summary-desc {
  color: #4b5563;
  margin-bottom: 24px;
}
.p2p-print-btn {
  width: 100%;
  margin-bottom: 24px;
  padding: 10px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.p2p-print-btn:hover {
  background: #f3f4f6;
}
.p2p-print-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="9" width="12" height="7" rx="2"/><path d="M6 17v2a2 2 0 002 2h8a2 2 0 002-2v-2"/><path d="M6 9V7a2 2 0 012-2h8a2 2 0 012 2v2"/></svg>') no-repeat center/contain;
}
.p2p-divider {
  border-top: 1px solid #e5e7eb;
  margin: 18px 0;
}
.p2p-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  margin-bottom: 10px;
}
.p2p-chevron {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>') no-repeat center/contain;
}
.p2p-detail-row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #374151;
  margin-bottom: 8px;
}
.p2p-status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 0.98rem;
  margin-bottom: 8px;
  margin-top: 18px;
}
.p2p-status-dot {
  width: 16px;
  height: 16px;
  background: #9ca3af;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.p2p-status-dot::after {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  top: 4px;
}
.p2p-help {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 0.98rem;
  margin-bottom: 8px;
}
.p2p-help-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="gray" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1"/></svg>') no-repeat center/contain;
}
.p2p-brand {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 4px;
}
.p2p-brand-dot {
  width: 24px;
  height: 24px;
  background: #d1d5db;
  border-radius: 50%;
  display: inline-block;
}
.p2p-brand-p {
  font-size: 1rem;
  font-weight: bold;
  color: #374151;
}
@media (max-width: 900px) {
  .p2p-container {
    grid-template-columns: 1fr;
  }
  .p2p-left, .p2p-right {
    border-right: none;
    padding: 32px 16px;
  }
}
</style>