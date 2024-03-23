
<template>
  <UContainer>
    <LayoutPageHeader>
        <LayoutPageTitle>
      <slot name="header" />
        </LayoutPageTitle>
    </LayoutPageHeader>
    <LayoutPageContent>
      <slot name="content" />
    </LayoutPageContent>
  </UContainer>
</template>
