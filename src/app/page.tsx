import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollSpy } from "@/components/ScrollSpy";
import {
  Github,
  Mail,
  ExternalLink,
  BookOpen,
  Smartphone,
  Server,
  Database,
  Code2,
  Cloud,
  Plug,
  User,
  Target,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const profile = {
  name: "Your Name",
  title: "Web Developer",
  background: "前職や学歴などの経歴を記載してください。",
  motivation:
    "エンジニアを目指したきっかけや理由を記載してください。どのような経験や出来事がきっかけでプログラミングに興味を持ったかなど。",
  learning:
    "どのように学習してきたかを記載してください。独学、スクール、書籍、オンライン学習など、具体的な学習方法や期間など。",
  strengths: [
    "強み・アピールポイント1",
    "強み・アピールポイント2",
    "強み・アピールポイント3",
  ],
};

const futureGoals = {
  shortTerm: [
    "学びたい技術や取得したい資格",
    "取り組みたいプロジェクト",
  ],
  longTerm: [
    "目指すエンジニア像",
    "キャリアビジョン",
  ],
};

const projects = [
  {
    id: 1,
    title: "ex/review",
    description:
      "日報ベースの学習管理を実現するマルチテナント対応のSaaSアプリケーション。学習者の日々の学習内容を記録し、進捗を可視化することで、効果的な学習支援を提供します。",
    icon: BookOpen,
    iconImage: "/ex-review-icon.png",
    // リンク（実際のURLに置き換えてください）
    links: {
      github: "https://github.com/your-username/study-support-app",
      demo: "https://study-support-app.com",
    },
    // スクリーンショット（publicフォルダに画像を配置）
    images: ["/images/study-support-1.png", "/images/study-support-2.png"],
    features: [
      "マルチテナント対応（複数組織が独立して利用可能）",
      "日報管理（学習内容・時間・トピックの記録）",
      "ダッシュボード（学習時間の可視化・集計）",
      "ロールベースアクセス制御（6種類のロール）",
      "Stripe連携によるサブスクリプション課金",
      "Gemini AIによる日報要約機能",
    ],
    // 工夫した点・課題と解決策
    challenges: [
      {
        problem: "マルチテナント設計の複雑さ",
        solution:
          "テナントごとにデータを分離しつつ、共通のコードベースで管理できるよう設計。ミドルウェアでテナントを自動判別し、クエリスコープで確実にデータを分離。",
      },
      {
        problem: "AWS ECSへのデプロイ",
        solution:
          "マルチステージビルドでDockerイメージを最適化。Cloudflare Tunnelを使用してセキュアな公開を実現。デプロイスクリプトを自作して自動化。",
      },
    ],
    // 学んだこと
    learnings: [
      "大規模なSaaSアプリケーションの設計パターン",
      "AWSのコンテナサービス（ECS/ECR）の運用",
      "Stripeを使った決済システムの実装",
      "セキュリティを考慮したインフラ構築",
    ],
    frontend: {
      title: "Frontend",
      techs: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "TanStack Query",
        "Redux Toolkit",
        "Tailwind CSS 4",
        "Radix UI",
        "Tiptap（リッチテキストエディタ）",
        "Recharts",
        "Axios",
        "Playwright（E2Eテスト）",
      ],
    },
    backend: {
      title: "Backend",
      techs: [
        "Laravel 12",
        "PHP 8.3",
        "MySQL 8.0（RDS）",
        "Laravel Sanctum（Token認証）",
        "Spatie Permission（RBAC）",
        "Laravel Cashier（Stripe連携）",
        "PHPUnit / Mockery",
        "PHPStan / Larastan",
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      techs: [
        "AWS ECS Fargate",
        "AWS ECR",
        "AWS RDS（MySQL）",
        "AWS Secrets Manager",
        "AWS CloudWatch Logs",
        "Cloudflare Tunnel / WAF",
        "Docker（マルチステージビルド）",
        "Nginx（リバースプロキシ）",
        "Vercel（Frontend）",
      ],
    },
    external: {
      title: "External Services / API",
      techs: [
        "Stripe API（決済・Webhook）",
        "Sentry（エラー追跡・監視）",
        "Resend（メール配信）",
        "Gemini AI（日報要約）",
        "REST API（JSON）",
        "Rate Limiting",
      ],
    },
  },
  {
    id: 2,
    title: "ex/only - 支出家計簿",
    description:
      "シンプルで使いやすい家計簿モバイルアプリ。支出の記録、グラフでの可視化、多言語対応など、日常的な家計管理をサポートします。",
    icon: Smartphone,
    iconImage: "/ex-only-3.png",
    links: {
      github: "https://github.com/your-username/kakeibo-app",
      appStore: "https://apps.apple.com/app/your-app",
      playStore: "https://play.google.com/store/apps/details?id=your.app",
    },
    images: ["/images/kakeibo-1.png", "/images/kakeibo-2.png"],
    features: [
      "支出・収入の記録管理",
      "カテゴリ別集計・グラフ表示",
      "固定費の自動登録",
      "多言語対応（i18n）",
      "レシート読み取り（ML Kit）",
      "iCloud同期対応",
    ],
    challenges: [
      {
        problem: "レシートからのテキスト認識精度",
        solution:
          "Google ML Kitを使用し、認識結果を正規表現でパースして金額を抽出。ユーザーが手動で修正できるUIも実装。",
      },
      {
        problem: "オフラインファーストの設計",
        solution:
          "Expo SQLiteでローカルにデータを保存し、ネットワーク復帰時にiCloudと同期。競合解決のロジックを実装。",
      },
    ],
    learnings: [
      "React Nativeでのモバイルアプリ開発",
      "Expo EASを使ったビルド・配布",
      "アプリ内課金（RevenueCat）の実装",
      "多言語対応（i18n）の設計",
    ],
    frontend: {
      title: "Mobile App",
      techs: [
        "React Native 0.81",
        "Expo 54",
        "TypeScript",
        "NativeWind（Tailwind CSS）",
        "React Navigation",
        "Expo SQLite（ローカルDB）",
        "Expo Camera",
        "React Native Reanimated",
      ],
    },
    infrastructure: {
      title: "Infrastructure",
      techs: [
        "Expo EAS Build",
        "Expo EAS Submit",
        "App Store / Google Play",
        "Supabase（BaaS）",
      ],
    },
    external: {
      title: "External Services / API",
      techs: [
        "Google ML Kit（テキスト認識）",
        "RevenueCat（課金管理）",
        "iCloud（データ同期）",
        "i18n-js（多言語対応）",
        "Expo Localization",
      ],
    },
  },
];

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
  ],
  backend: ["Laravel", "PHP", "MySQL", "REST API", "Redis"],
  mobile: ["React Native", "Expo"],
  infrastructure: [
    "AWS (ECS/ECR/RDS)",
    "Docker",
    "Cloudflare",
    "Vercel",
    "Nginx",
    "Supabase",
    "Expo EAS",
  ],
  tools: [
    "Git",
    "GitHub",
    "Claude Code",
    "Stripe",
    "Sentry",
    "Gemini AI",
    "Resend",
    "RevenueCat",
    "ML Kit",
    "Figma",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollSpy />
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {profile.title}
            </p>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              フルスタック開発者として、モダンなWebアプリケーションとモバイルアプリの開発を行っています。
              ユーザー体験を重視した、使いやすく保守性の高いプロダクト開発を目指しています。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">
                  <Code2 className="mr-2 h-4 w-4" />
                  プロジェクトを見る
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#about">
                  <User className="mr-2 h-4 w-4" />
                  自己紹介
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">About</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* 経歴・バックグラウンド */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  経歴・バックグラウンド
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{profile.background}</p>
              </CardContent>
            </Card>

            {/* なぜエンジニアを目指したか */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  エンジニアを目指した理由
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{profile.motivation}</p>
              </CardContent>
            </Card>

            {/* 学習の取り組み */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  学習の取り組み
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{profile.learning}</p>
              </CardContent>
            </Card>

            {/* 強み・アピールポイント */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  強み・アピールポイント
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {profile.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="h-5 w-5 text-primary" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Server className="h-5 w-5 text-primary" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Mobile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cloud className="h-5 w-5 text-primary" />
                  Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.infrastructure.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Database className="h-5 w-5 text-primary" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader className="bg-white">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden shadow-md ${project.iconImage ? "bg-white" : "bg-primary/10"}`}>
                        {project.iconImage ? (
                          <img
                            src={project.iconImage}
                            alt={project.title}
                            className="h-8 w-8 object-contain"
                          />
                        ) : (
                          <Icon className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base">
                          {project.description}
                        </CardDescription>
                        {/* プロジェクトリンク */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.links.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {project.links.demo && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.links.appStore && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.links.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                App Store
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {project.links.playStore && (
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={project.links.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Google Play
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="mb-3 font-semibold">主な機能</h4>
                      <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="my-6" />

                    {/* 工夫した点・課題と解決策 */}
                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <Lightbulb className="h-4 w-4" />
                        工夫した点・課題と解決策
                      </h4>
                      <div className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                          <div
                            key={index}
                            className="rounded-lg border bg-muted/30 p-4"
                          >
                            <p className="font-medium text-foreground">
                              課題: {challenge.problem}
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground">
                              解決策: {challenge.solution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 学んだこと */}
                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <GraduationCap className="h-4 w-4" />
                        学んだこと
                      </h4>
                      <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="my-6" />

                    {/* Tech Stack */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Frontend / Mobile */}
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 font-semibold">
                          <Code2 className="h-4 w-4" />
                          {project.frontend.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.frontend.techs.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Backend */}
                      {project.backend && (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <Server className="h-4 w-4" />
                            {project.backend.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.backend.techs.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Infrastructure */}
                      {project.infrastructure && (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <Cloud className="h-4 w-4" />
                            {project.infrastructure.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.infrastructure.techs.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* External Services / API */}
                      {project.external && (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <Plug className="h-4 w-4" />
                            {project.external.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.external.techs.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Future Goals Section */}
        <section id="goals" className="mb-20 scroll-mt-20">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Future Goals</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  短期目標
                </CardTitle>
                <CardDescription>直近で取り組みたいこと</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {futureGoals.shortTerm.map((goal, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  長期目標
                </CardTitle>
                <CardDescription>将来目指すエンジニア像</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {futureGoals.longTerm.map((goal, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 min-h-[60vh]">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Contact</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-6 text-muted-foreground">
                お仕事のご依頼やご質問がございましたら、お気軽にご連絡ください。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:example@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
