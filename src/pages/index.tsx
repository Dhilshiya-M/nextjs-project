import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogDescription, DialogTitle, DialogContent } from "@radix-ui/react-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EmailInput from "@/components/validation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome to Components
      </h1>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <div className="flex flex-wrap gap-6 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Post</DropdownMenuItem>
              <DropdownMenuItem>Activity</DropdownMenuItem>
              <DropdownMenuItem>Language</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <EmailInput></EmailInput>
          <Button variant="outline">Button</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
              <DialogTitle>Welcome to Digisailor!</DialogTitle>
              <DialogDescription>A place to explore innovative ideas, nurture and cultivate your talent.
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
