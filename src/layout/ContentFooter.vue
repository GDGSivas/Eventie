<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://gdgsivas.org/iwd2020" class="font-weight-bold ml-1" target="_blank">IWD 2020</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://gdgsivas.org/" class="nav-link" target="_blank">GDG Sivas</a>
          </li>
          <li class="nav-item">
            <a href="https://gdgsivas.org/about" class="nav-link" target="_blank">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
