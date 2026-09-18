import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FindYourPath from "./pages/FindYourPath";
import Contact from "./pages/Contact";
import EvidencePage from "./pages/EvidencePage";
import NetworkPage from "./pages/NetworkPage";
import PeopleAtlas from "./pages/PeopleAtlas";
import SolutionDetail from "./pages/SolutionDetail";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/find-your-path" component={FindYourPath} />
      <Route path="/contact" component={Contact} />
      <Route path="/people" component={PeopleAtlas} />
      <Route path="/network/:page" component={NetworkPage} />
      <Route path="/evidence/:page" component={EvidencePage} />
      <Route path="/:kind/:slug" component={SolutionDetail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
