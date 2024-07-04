
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
    return (
        <div className="2xl:max-w-[1500px] max-w-5xl overflow-y-auto h-[620px] mx-auto bg-secondary rounded-xl p-4">
            <div className="relative">
                {/* <img src="" alt="Company Thumbnail" className="w-full h-72 object-cover" /> */}
                <div className=" top-4 left-4">
                    <Avatar className="w-24 h-24">
                        <AvatarImage src='https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940' />
                        <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="flex items-center mt-4 px-4">
                <div>
                    <h1 className="text-2xl font-bold">Netflix</h1>
                    <p className="text-sm text-muted-foreground">(1) following</p>
                    <p className="text-sm text-muted-foreground">Leveraging Technology to Provide Better Services</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Badge>Management Consulting</Badge>
                        <Badge>IT Services & Consulting</Badge>
                        <Badge>Private</Badge>
                        <Badge>Corporate</Badge>
                        <Badge>B2B</Badge>
                    </div>
                </div>
                <Button variant="destructive" className="ml-auto rounded-full">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Follow
                </Button>
            </div>
            <div className="mt-6 px-4">
                <Tabs defaultValue="overview">
                    <TabsList className="border-b">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="why-join-us">Why Join Us</TabsTrigger>
                        <TabsTrigger value="jobs">Jobs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="pt-4 bg-background rounded-xl p-10">
                        <h2 className="text-xl font-bold">Netflix: The Revolution in Home Entertainment</h2>
                        <p className="mt-2">
                            Netflix is a streaming giant that has fundamentally changed how we consume movies and TV shows. What
                            started as a DVD-by-mail service in 1997 has transformed into a global entertainment powerhouse, boasting
                            over 238 million subscribers in 190 countries.
                        </p>
                        <h3 className="mt-4 font-semibold">From DVDs to Streaming Dominance:</h3>
                        <p className="mt-2">
                            Netflix's journey from a DVD rental service to a streaming behemoth is a testament to its innovative
                            approach and commitment to customer satisfaction.
                        </p>
                    </TabsContent>
                    <TabsContent value="why-join-us" className="pt-4 bg-background rounded-xl p-10">
                        <h2 className="text-xl font-bold">Why Join Us</h2>
                        <p className="mt-2">
                            Joining Netflix means being part of a dynamic and innovative team that is at the forefront of the
                            entertainment industry. We offer a collaborative work environment, opportunities for growth, and a chance
                            to make a significant impact.
                        </p>
                    </TabsContent>
                    <TabsContent value="jobs" className="pt-4 p-10">
                        <h2 className="text-xl font-bold">Jobs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Software Engineer</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Engineering</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$100k - $150k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Product Manager</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Product</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$80k - $120k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Data Analyst</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Data</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$70k - $100k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Marketing Specialist</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Marketing</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$60k - $90k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Customer Service Representative</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Customer Service</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$40k - $60k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">Content Moderator</h3>
                                    <p className="text-muted-foreground">Netflix</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge>Content</Badge>
                                        <Badge>Full-time</Badge>
                                        <Badge>$50k - $70k</Badge>
                                    </div>
                                    <Button variant="default">View Details</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}