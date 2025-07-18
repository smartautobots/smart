import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Phone, School, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: '',
    category: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    institution: '',
    teamSize: '',
    projectTitle: '',
    projectDescription: '',
    track: '',
    memberNames: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Your registration has been submitted. We'll contact you soon with further details.",
    });
    // Reset form
    setFormData({
      teamName: '',
      category: '',
      leaderName: '',
      leaderEmail: '',
      leaderPhone: '',
      institution: '',
      teamSize: '',
      projectTitle: '',
      projectDescription: '',
      track: '',
      memberNames: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Register for the Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Road Safety Innovation Challenge 2025 and be part of the solution to make roads safer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading">Team Registration Form</CardTitle>
              <CardDescription>
                Fill in your details to register for the Road Safety Innovation Challenge 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Team Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamName" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Team Name *
                    </Label>
                    <Input
                      id="teamName"
                      value={formData.teamName}
                      onChange={(e) => handleInputChange('teamName', e.target.value)}
                      placeholder="Enter your team name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School (Grade 9-12)</SelectItem>
                        <SelectItem value="college">College (Diploma/UG/PG)</SelectItem>
                        <SelectItem value="open">Open (Researchers/Professionals)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Team Leader Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="leaderName">Team Leader Name *</Label>
                    <Input
                      id="leaderName"
                      value={formData.leaderName}
                      onChange={(e) => handleInputChange('leaderName', e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leaderEmail" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </Label>
                    <Input
                      id="leaderEmail"
                      type="email"
                      value={formData.leaderEmail}
                      onChange={(e) => handleInputChange('leaderEmail', e.target.value)}
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leaderPhone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone *
                    </Label>
                    <Input
                      id="leaderPhone"
                      value={formData.leaderPhone}
                      onChange={(e) => handleInputChange('leaderPhone', e.target.value)}
                      placeholder="+91 XXXXXXXXXX"
                      required
                    />
                  </div>
                </div>

                {/* Institution and Team Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution" className="flex items-center gap-2">
                      <School className="h-4 w-4" />
                      Institution/Organization *
                    </Label>
                    <Input
                      id="institution"
                      value={formData.institution}
                      onChange={(e) => handleInputChange('institution', e.target.value)}
                      placeholder="School/College/Company name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size *</Label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Member</SelectItem>
                        <SelectItem value="2">2 Members</SelectItem>
                        <SelectItem value="3">3 Members</SelectItem>
                        <SelectItem value="4">4 Members</SelectItem>
                        <SelectItem value="5">5 Members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Project Title *
                    </Label>
                    <Input
                      id="projectTitle"
                      value={formData.projectTitle}
                      onChange={(e) => handleInputChange('projectTitle', e.target.value)}
                      placeholder="Your innovative solution title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="track">Track/Focus Area *</Label>
                    <Select value={formData.track} onValueChange={(value) => handleInputChange('track', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology-based Solutions</SelectItem>
                        <SelectItem value="education">Education & Awareness</SelectItem>
                        <SelectItem value="infrastructure">Design & Infrastructure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    placeholder="Describe your innovative solution for road safety (max 500 words)"
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memberNames">Team Member Names</Label>
                  <Textarea
                    id="memberNames"
                    value={formData.memberNames}
                    onChange={(e) => handleInputChange('memberNames', e.target.value)}
                    placeholder="List all team member names (including team leader)"
                    className="min-h-24"
                  />
                </div>

                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-white px-12 py-3 text-lg animate-pulse-glow"
                  >
                    Submit Registration
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">Important Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-primary">Registration</p>
                <p className="text-muted-foreground">21 July - 1 August</p>
              </div>
              <div>
                <p className="font-medium text-primary">Mentorship</p>
                <p className="text-muted-foreground">2 August - 10 August</p>
              </div>
              <div>
                <p className="font-medium text-primary">Final Event</p>
                <p className="text-muted-foreground">25 August 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;