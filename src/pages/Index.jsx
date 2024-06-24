import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

function Index() {
  const [parlorName, setParlorName] = useState("");
  const [location, setLocation] = useState("");
  const [iceCreamFlavors, setIceCreamFlavors] = useState([]);
  const [newFlavor, setNewFlavor] = useState("");

  const addFlavor = () => {
    if (newFlavor.trim() === "") {
      toast.error("Flavor name cannot be empty");
      return;
    }
    setIceCreamFlavors([...iceCreamFlavors, newFlavor]);
    setNewFlavor("");
    toast.success("Flavor added successfully");
  };

  const handleSubmit = () => {
    if (parlorName.trim() === "" || location.trim() === "") {
      toast.error("Parlor name and location cannot be empty");
      return;
    }
    toast.success("Ice cream parlor added successfully");
    // Here you can add the logic to save the parlor details to a database or state management system
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Ice Cream Parlor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="parlorName">Parlor Name</Label>
            <Input
              id="parlorName"
              value={parlorName}
              onChange={(e) => setParlorName(e.target.value)}
              placeholder="Enter parlor name"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="newFlavor">Add Ice Cream Flavor</Label>
            <div className="flex space-x-2">
              <Input
                id="newFlavor"
                value={newFlavor}
                onChange={(e) => setNewFlavor(e.target.value)}
                placeholder="Enter flavor name"
              />
              <Button onClick={addFlavor}>Add Flavor</Button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Flavors</h3>
            <ul className="list-disc pl-5">
              {iceCreamFlavors.map((flavor, index) => (
                <li key={index}>{flavor}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;