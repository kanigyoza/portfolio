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
import { ImageSlider } from "@/components/ImageSlider";
import {
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
  name: "蟹餃子",
  title: "kanigyoza",
  background: "イラストレーターとしてキャリアをスタートし、デジタルコンテンツ制作の経験を積んできました。本業の傍ら、趣味として動画編集や音楽制作にも取り組み、映像・サウンド・ビジュアルを横断するマルチメディア制作のスキルを培っています。こうしたクリエイティブ領域での経験が、ユーザー視点に立ったUI/UXデザインや、直感的なプロダクト開発に活かされています。",
  motivation:
    "きっかけはDiscord Botの開発でした。コミュニティ運営の中で「こんな機能があれば便利なのに」という声に応えるため、独学でBotを作成。Botが滞りなく稼働している様子を見た時の達成感、そして仲間たちが実際に使って喜んでくれる姿を見た時の嬉しさは、今でも鮮明に覚えています。この経験から、クリエイターや身近な人たちの課題を解決し、日々の活動をサポートできるツールやサービスを自分の手で作りたいという想いが芽生え、エンジニアの道を志すようになりました。",
  learning:
    "会社の研修と独学でプログラミングの基礎を固めています。研修では掲示板アプリやWebアプリケーションの開発を通じて、フロントエンドからバックエンド、インフラまで一貫した開発スキルを習得。実際に動くプロダクトを作りながら学ぶ実践的なアプローチで、エラー解決力や設計思考を身につけています。",
  strengths: [
    "イラスト・動画・音楽制作で培ったクリエイティブな視点とUI/UXへのこだわり",
    "独学から始めた自走力と、新しい技術を積極的に吸収する学習意欲",
    "ユーザーの課題に寄り添い、本当に役立つプロダクトを追求する姿勢",
  ],
};

const futureGoals = {
  shortTerm: [
    "Linux・Docker等のインフラ基盤技術の習得",
    "LPIC・AWS認定資格の取得",
    "ネットワークやセキュリティの知識強化",
  ],
  longTerm: [
    "クリエイター同士が繋がり、作品を共有できるSNSの個人開発",
    "インフラエンジニアとして安定性・信頼性の高いシステム構築に貢献",
    "開発とインフラ両方の視点を持つエンジニアとして成長",
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
    // サンプルアカウント
    demoAccounts: {
      tenantId: "T000001",
      accounts: [
        { role: "Student", email: "student@example.com", password: "password123" },
        { role: "Teacher", email: "teacher@example.com", password: "password123" },
      ],
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
        problem: "セキュリティ対策の徹底",
        solution:
          "Cloudflare WAFによる不正アクセス防御、CSRF/XSS対策の実装、APIのRate Limiting導入。Secrets Managerで機密情報を安全に管理し、HTTPS通信を徹底。",
      },
      {
        problem: "マルチテナント対応のDB設計",
        solution:
          "テナントごとにデータを論理分離する設計を採用。クエリスコープで確実にデータを分離し、インデックス最適化でパフォーマンスを確保。",
      },
      {
        problem: "インフラコストの最適化",
        solution:
          "ECS Fargateのスポットインスタンス活用、RDSのリザーブドインスタンス検討、CloudWatchでリソース使用状況を監視し、適切なスケーリング設定でコストを削減。",
      },
      {
        problem: "キャッシュ設計によるパフォーマンス向上",
        solution:
          "Upstash Redisを導入し、頻繁にアクセスされるデータをキャッシュ。DBへのクエリ負荷を軽減し、レスポンス速度を改善。キャッシュの有効期限やインバリデーション戦略も適切に設計。",
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
        "Upstash（Redis）",
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
    development: {
      title: "Development",
      techs: ["AI駆動開発", "Claude Code"],
    },
  },
  {
    id: 2,
    title: "ex/only - 支出家計簿",
    description:
      "支出管理に特化したシンプルな家計簿アプリ。収入や複雑な機能は一切省き、「出費を記録する」ことだけに集中。直感的な操作で日々の支出をサッと記録し、カテゴリ別のグラフで支出傾向を一目で把握できます。",
    icon: Smartphone,
    iconImage: "/ex-only-3.png",
    links: {},
    comingSoon: true,
    images: ["/images/kakeibo-1.png", "/images/kakeibo-2.png"],
    features: [
      "支出記録に特化（収入管理は省略したシンプル設計）",
      "ワンタップで素早く支出を記録",
      "カテゴリ別の支出グラフで傾向を可視化",
      "固定費の自動登録で毎月の入力を省力化",
      "多言語対応（i18n）",
      "iCloud同期でデバイス間データ共有",
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
    development: {
      title: "Development",
      techs: ["AI駆動開発", "Claude Code"],
    },
    sampleImages: [
      "/ex-only-sample-1.PNG",
      "/ex-only-sample-2.PNG",
      "/ex-only-sample-3.PNG",
      "/ex-only-sample-4.PNG",
      "/ex-only-sample-5.PNG",
    ],
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
    "Affinity Designer 2",
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
            <p
              className="text-xl ml-1 gradient-text"
              style={{ letterSpacing: "0.15em" }}
            >
              {profile.title}
            </p>
            <h1
              className="mt-1 text-4xl font-black md:text-6xl gradient-text"
              style={{ letterSpacing: "0.05em" }}
            >
              {profile.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              AI駆動開発をメインスタイルとして、WebアプリケーションやモバイルアプリのUI設計から開発まで行っています。
              AIと協働しながら、ユーザー体験を重視した使いやすいプロダクト開発を目指しています。
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
                        <div className="mt-4 flex flex-wrap gap-2 items-center">
                          {"demo" in project.links && project.links.demo && (
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
                          {"comingSoon" in project && project.comingSoon && (
                            <Badge variant="secondary">近日リリース予定</Badge>
                          )}
                        </div>
                        {/* サンプルアカウント情報 */}
                        {"demoAccounts" in project && project.demoAccounts && (
                          <div className="mt-4 p-3 rounded-lg bg-muted/50 text-sm">
                            <p className="font-medium mb-2">Demo Account</p>
                            <p className="text-muted-foreground">
                              Tenant ID: <code className="bg-muted px-1 rounded">{project.demoAccounts.tenantId}</code>
                            </p>
                            <div className="mt-2 space-y-1">
                              {project.demoAccounts.accounts.map((account, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  {account.role}: <code className="bg-muted px-1 rounded">{account.email}</code> / <code className="bg-muted px-1 rounded">{account.password}</code>
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
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

                      {/* Development */}
                      {"development" in project && project.development && (
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <Code2 className="h-4 w-4" />
                            {project.development.title}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.development.techs.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sample Images Slider */}
                    {"sampleImages" in project && project.sampleImages && (
                      <div className="mt-6">
                        <h4 className="mb-4 font-semibold">Screenshots</h4>
                        <ImageSlider
                          images={project.sampleImages}
                          alt={project.title}
                        />
                      </div>
                    )}
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
