import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, FileText, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const { toast } = useToast();
  
  const handleGoogleFormRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeCYGFJywZ9_qwpDQKJw-S287RtVgmq36Hbqz65TIpjV2uWCA/viewform', '_blank');
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
              <CardTitle className="text-2xl font-heading">Registration</CardTitle>
              <CardDescription>
                Complete your registration through our Google Form
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="bg-gradient-hero rounded-lg p-8 text-white">
                  <FileText className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Complete Registration via Google Form</h3>
                  <p className="mb-6">
                    Fill out the registration form and upload your PDF abstract/sketch through our secure Google Form.
                  </p>
                  <Button 
                    onClick={handleGoogleFormRedirect}
                    size="lg"
                    className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open Registration Form
                  </Button>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                    <h4 className="text-lg font-semibold text-yellow-800">Important Notice</h4>
                  </div>
                  <div className="text-yellow-700 space-y-2">
                    <p>• <strong>Upload only PDF files</strong> for abstracts/sketches</p>
                    <p>• All entries are saved securely to Google Drive and Google Sheets</p>
                    <p>• Submissions violating format will be rejected automatically</p>
                    <p>• Form data and files are processed via Google Apps Script</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-accent/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">Important Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium text-primary">Abstract Submission</p>
                <p className="text-muted-foreground">21 July - 1 August 2025</p>
              </div>
              <div>
                <p className="font-medium text-primary">Final Presentation</p>
                <p className="text-muted-foreground">12 - 20 August 2025</p>
              </div>
              <div>
                <p className="font-medium text-primary">Award Ceremony</p>
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
