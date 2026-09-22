# Next Starter Kit

빠르게 웹 개발을 시작할 수 있도록 구성한 Next.js 모던 웹 스타터킷입니다.

## 기술 스택

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (`base-nova` 스타일, [Base UI](https://base-ui.com) 기반)
- [Zustand](https://zustand.docs.pmnd.rs) — 상태관리
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) — 폼/검증
- [next-themes](https://github.com/pacocoursey/next-themes) — 다크모드

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

## 디렉토리 구조

```
app/                    # App Router 라우트
  examples/counter/      # zustand 카운터 예제 페이지
  examples/contact-form/ # react-hook-form + zod 폼 예제 페이지
components/
  ui/                    # shadcn/ui 컴포넌트
  layout/                # Header, Footer 등 공통 레이아웃
  examples/               # 예제 데모 컴포넌트
  theme-provider.tsx      # next-themes Provider
  theme-toggle.tsx         # 다크모드 토글 버튼
lib/
  stores/                 # zustand 스토어
  validations/            # zod 스키마
  utils.ts                # cn 유틸
```

## 포함된 기능

- **다크모드**: 헤더의 토글 버튼으로 라이트/다크/시스템 테마를 전환할 수 있습니다.
- **상태관리 예제**: `/examples/counter`에서 zustand 스토어 사용법을 확인할 수 있습니다.
- **폼 검증 예제**: `/examples/contact-form`에서 react-hook-form + zod 조합의 폼 검증을 확인할 수 있습니다.

## shadcn/ui 컴포넌트 추가하기

```bash
npx shadcn@latest add <component>
```

이 프로젝트는 `base-nova` 스타일(Base UI 기반)을 사용하므로, 새 컴포넌트를 추가한 뒤 `components/ui/button.tsx`와 동일하게 `@base-ui/react`와 `cn` 유틸을 사용하는지 확인하세요.
