<template>
  <LayoutPageAppHeader />
  <UContainer class="pt-28" >
    <LayoutPageHeader>
      <CommonTitle>
        <slot name="header" />
      </CommonTitle>
    </LayoutPageHeader>
    <LayoutPageContent>
      <slot name="content" />
    </LayoutPageContent>
  </UContainer>
  <LayoutPageFooter />
</template>
